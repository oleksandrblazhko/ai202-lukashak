### Етапи створення контейнеру для роботи з _MongoDB_

1. Запускаємо командний рядок або _PowerShell_ на машині із встановленим _Docker_.
2. Створюємо каталог, наприклад: `D:/mongotest` через `mkdir`.
3. В ньому створюємо підкаталог `scripts`, що буде містити файл `init.js` з наступним кодом:

```js
db = connect("mongodb://localhost/project");

db.createUser({
  user: "admin",
  pwd: "111111",
  roles: ["readWrite", "dbAdmin"],
});

db.users.insertMany([
  {
    "_id": "123",
    username: "DanBear",
    password: "555qqq",
    secret_key: "5e0dd59c8686b2ed36a50a9f428cf39f305a1fb5c0d2f842a5b2716bae9e0004",
  },
  {
    "_id": "11",
    username: "Michael",
    password: "123456",
    secret_key: "5e0dd59c8676b2e236a50a9f428cf39f305a1fb5c0d2f842a5b2716bae9e0004",
  },
]);

db.messages.insertMany([
  {
    sender: "11",
    receiver: "123",
    text: "Hello, Dan!",
    date: 1667862863042,
  },
  {
    sender: "123",
    receiver: "11",
    text: "Hello, Michael!",
    date: 1667862863122,
  },
  {
    sender: "11",
    receiver: "123",
    text: ":D <3",
    date: 1667862863148,
  },
]);
```

4. Вводимо команду `docker pull mongo` для одержання образу із потрібними файлами та конфігурацією.
5. Створюємо та запускаємо новий контейнер, використовуючи команду `docker run --name lukashak-mongo -p 27017:27017 -w /scripts -v ${PWD}:/scripts -d mongo`.
6. Запускаємо _mongosh_ для роботи з _MongoDB_: `docker exec -it lukashak-mongo mongosh project` та загружаємо створений раніше скрипт `load("scripts/init.js")`.
7. База даних налаштована та заповнена, підключатися до неї можна за URI `mongodb://admin:111111@localhost:27017/project`.
