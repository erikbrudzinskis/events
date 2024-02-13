import path from "path";
import * as fs from "fs";
import {NextApiRequest, NextApiResponse} from "next";

function buildCommentPath() {
    return path.join(process.cwd(), 'data', 'comments.json');
}

function getComments(filepath: String) {
    const data = fs.readFileSync(filepath, 'utf-8');
    return JSON.parse(data);
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const filepath = buildCommentPath();
    const data = getComments(filepath);
    const eventId = req.query.eventId;

    if (req.method === 'GET') {
        const comments = data.filter(item => item.eventId === eventId);

        console.log(eventId)
        console.log(comments)

        res
            .status(200)
            .json({comments: comments});
    }

    if (req.method === 'POST') {
        const email = req.body.email;
        const comment = req.body.comment;
        const time = req.body.time;

        const newComment = {
            eventId: eventId,
            email: email,
            comment: comment,
            time: time
        };

        data.push(newComment);
        fs.writeFileSync(filepath, JSON.stringify(data));
        res
            .status(201)
            .json({message: 'Success', comment: newComment});
    }
}
