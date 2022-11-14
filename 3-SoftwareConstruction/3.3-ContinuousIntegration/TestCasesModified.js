const { MongoClient, ServerApiVersion } = require('mongodb');

const client = {"id":11,"username":"DanBear","password":"555qqq","secret_key":"5e0dd59c8686b2ed36a50a9f428cf39f305a1fb5c0d2f842a5b2716bae9e0004"};

class DataBase {
    async init() {
        const mongoClient = await new MongoClient('mongodb+srv://Admin:555qqq@cluster0.ulfsfaq.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverApi: ServerApiVersion.v1
        }).connect();

        this.messages = mongoClient.db('project').collection('messages');
    }

    async newMessage(msg) {
        try {
            const res = this.messages.insertOne(msg);

            return { ok: true };
        } catch (e) {
            return { ok: false };
        }
    }
}

const db = new DataBase();

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

async function test() {
    await db.init();

    let e = false;

    console.log('TC1.1 (user 123 exists; sendMessage(123, \'Hello, Dan!\') == 1): ');
    if (await sendMessage(123, 'Hello, Dan!') == 1) console.log('Passed');
    else { console.log('Failed'); e = true }

    console.log('TC1.2 (none; sendMessage(-5, \'Hello, Dan!\') == -2): ');
    if (await sendMessage(-5, 'Hello, Dan!') == -2) console.log('Passed');
    else { console.log('Failed'); e = true }
    
    console.log('TC1.3 (none; sendMessage(3, \'\') == -2): ');
    if (await sendMessage(3, '') == -2) console.log('Passed');
    else { console.log('Failed'); e = true }

    console.log('TC1.4 (none; sendMessage(22, \'a\'.repeat(1500)) == -2): ');
    if (await sendMessage(22, 'a'.repeat(1500)) == -2) console.log('Passed');
    else { console.log('Failed'); e = true }

    if (e) process.exit(1);
    else process.exit();
}

test();
