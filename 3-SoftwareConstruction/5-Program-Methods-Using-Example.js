// Відправка листа

let receiverId = '58eu7ty6nbg230mk';
let text = 'Howdy?';

await sendMessage(receiverId, text);


// Пошук анкет користувачів старше 20 років

await db.getProfiles({ 'fullProfile.age': { $gt: 20 }});