import {NextApiRequest, NextApiResponse} from "next";
import {MongoClient} from "mongodb";

async function connectDatabase() {
    const url = 'mongodb://localhost:27017/events';
    return await MongoClient.connect(url);
}

async function insertDocument(collection, document) {
    await collection.insertOne(document);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    let client;
    try {
        client = await connectDatabase();
    } catch (error) {
        res.status(500).json({message: 'Connecting to the database failed'});
        return;
    }
    const db = client.db();
    const collection = db.collection('comments');
    const eventId = req.query.eventId;

    if (req.method === 'GET') {
        const data = await collection.find( {eventId: eventId} ).sort({ _id: -1}).toArray();

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

        try {
            await insertDocument(collection, newComment);
            client.close();
        } catch (error) {
            res.status(500).json({message: 'Inserting data failed'});
        }

        res
            .status(201)
            .json({ message: 'Success', comment: newComment });
    }
}
