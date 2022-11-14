const {client, db} = require('./db');

async function sendMessage(user_id, message) {
    if (message.length < 1 || message.length > 1024) {
        return -2;
    }
    if (user_id < 0) {
        return -1;
    }

    const messageObj = {
        sender: client.id,
        receiver: user_id,
        text: message,
        date: Date.now()
    }

    let result = await db.newMessage(messageObj);

    if (result.ok) return 1;
    else return -1;
}
