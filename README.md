# Тестовое задание для Travelpayouts

Данное тестовое задание выполненено для компании Travelpayouts,
в качестве основного стека был выбран
[React](https://github.com/facebook/react) + [Redux](https://github.com/reduxjs/redux).
Для копирования промокода в буфер обмена я использовал
[react-copy-to-clipboard](https://github.com/nkbt/react-copy-to-clipboard),
а для анимации плавного появления сообщения о копировании использовался
[react-transition-group](https://github.com/reactjs/react-transition-group).
Для проверки типов, переданных в качестве props я использовал
[prop-types](https://github.com/facebook/prop-types). Для работы со стилями я использовал
[CSS Modules](https://github.com/css-modules/css-modules) + [SCSS](https://github.com/sass/node-sass).
Приложение было полностью адаптировано под все виды устройств.

Так как для выполнения задания не был предоставлен сервер, я использовал
локальный сервер, который я развернул с помощью [json-server](https://github.com/typicode/json-server).

## Инструкция по развёртыванию приложения

Для установки всех зависимостей следует ввести в терминале
следующие команды:

`npm install`

Для локального запуска проекта:

`npm start`

После запуска проекта следует установить json-server

`npm install -g json-server`

Для запуска сервера следует ввести следующие команды:

`json-server --watch src/api/db.json --port 3001`
