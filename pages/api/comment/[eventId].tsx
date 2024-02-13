import path from "path";
import * as fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import { Collection, MongoClient } from "mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const url = 'mongodb://localhost:27017/event-comments';
    const client = await MongoClient.connect(url);
    const db = client.db();
    const collection = db.collection('comments');
    const eventId = req.query.eventId;

    if (req.method === 'GET') {
        const data = collection.find(item => item => item.eventId === eventId).;

        console.log(eventId)
        console.log(data)

        res
            .status(200)
            .json({ comments: data });
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

        await collection.insertOne(newComment);

        client.close();
        res
            .status(201)
            .json({ message: 'Success', comment: newComment });
    }
}
