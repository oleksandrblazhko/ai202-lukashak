const { client, db } = require('./db')

async function sendMessage (userId, message) {
  if (message.length < 1 || message.length > 1024) {
    return -2
  }
  if (userId < 0) {
    return -1
  }

  const messageObj = {
    sender: client.id,
    receiver: userId,
    text: message,
    date: Date.now()
  }

  const result = await db.newMessage(messageObj)

  if (result.ok) return 1
  else return -1
}

sendMessage(355, 'Hello')
