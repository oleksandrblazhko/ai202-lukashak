import { mongoClient, client } from './client.js'

async function sendMessage(user_id, message) {
    if (message.length < 1 || message.length > 1024) {
        return -2;
    }

    const messageObj = {
        sender: client.id,
        receiver,
        text,
        date: Date.now()
    }

    let result = await db.newMessage(messageObj);

    if (result.ok) return 1;
    else return -1;
}


async function getSavedProfiles() {
    let saved = client.savedProfileIds;

    return db.getProfiles({ _id: { $in: saved }});
}


class db {
    static async newMessage(message) {
        let collection = mongoClient.db('project').collection('message');

        try {
            const res = await collection.insertOne(message);

            if (res) return {
                ok: true,
                message_id: res._id
            }

            return { ok: false }
        } catch (err) {
            return { ok: false, error: err }
        }
    }


    static async getProfiles(filter = {}) {
        let collection = mongoClient.db('project').collection('profile');

        try {
            const res = await collection.find(filter);

            if (res) return {
                ok: true,
                profiles: res
            }
            
            return {ok: false}
        } catch (err) {
            return { ok: false };
        }
    }
}