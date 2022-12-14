### Словник атрибутів об’єктів

| Об'єкт                     | Атрибут          | Короткий опис              | Тип        | Обмеження                |
|----------------------------|------------------|----------------------------|------------|--------------------------|
| Анкета користувача         | Ім'я             | Як звати                   | текст      | довжина <64 символів     |
| Анкета користувача         | Фото             | Як виглядає                | зображення | розмір зображення <10 МБ |
| Анкета користувача         | Короткий опис    | Який користувач            | текст      | довжина <256 символів    |
| Анкета користувача         | Контактні дані   | Контактні дані користувача | текст      | довжина <256 символів    |
| Споживач                   | Ім'я             | Як звати                   | текст      | довжина <64 символів     |
| Споживач                   | Фото             | Як виглядає                | зображення | розмір зображення <10 МБ |
| Докладна інформація        | Ім'я             | Як звати                   | текст      | довжина <64 символів     |
| Докладна інформація        | Фото             | Як виглядає                | зображення | розмір зображення <10 МБ |
| Докладна інформація        | Опис             | Який користувач            | текст      | довжина <1024 символів   |
| Докладна інформація        | Контактні дані   | Контактні дані користувача | текст      | довжина <256 символів    |
| Докладна інформація        | Вік              | Скільки вже років          | число      | значення >0              |
| Докладна інформація        | Зріст            | Який зріст                 | число      | значення >0              |
| Інформація про архітектуру | Опис             | Яка архітектура            | текст      | довжина <2048 символів   |
| Інформація про архітектуру | Зображення       | Як виглядає                | зображення | розмір зображення <10 МБ |
| Інформація про архітектуру | Місцезнаходження | Де знаходиться             | координати | реальна точка на карті   |
| Інформація про архітектуру | Назва            | Як називається             | текст      | довжина <256 символів    |
| API                        | Протокол         | Який протокол              | текст      | HTTP чи HTTPS            |
| API                        | Версія           | Яка версія API             | число      | значення >0              |
| API                        | Ключ             | Ключ API                   | текст      | довжина <256 символів    |
| API                        | Адреса           | Адреса API-серверу         | текст      | довжина <256 символів    |