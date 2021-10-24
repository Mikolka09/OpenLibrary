const express = require("express");
const app = express();

// Установить каталог для статических файлов
app.use(express.static("public"));

// Установить загрузку текстовых файлов
const multer = require("multer");
app.use(multer({dest: "public/uploads"}).single("fileData"));

// Установить загрузку картинок
const multerImg = require("multer");
app.use(multerImg({dest: "public/storage"}).single("fileImg"));


// Настроим модуль для разборки запросов
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

// Подключим маршруты
const router = require("./routes");
app.use(router);


// Настройка соединения с базой
const mongoUri = "mongodb+srv://Mikolka:Mikolka3275@cluster0.tuurm.mongodb.net/OpenLibrary?retryWrites=true&w=majority";
const mongoose = require("mongoose");

mongoose.connect( // Соединиться с базой
    mongoUri, // строка соединения
    { useNewUrlParser: true, useUnifiedTopology: true }, // обязательные параметры

    // Асинхронный подход - после того, как устоновится соедиенение
    // JS выполнит эту функцию. В качестве аргумента будет передана ошибка - или null

    function (err) { // после соединения обработать результат
        if (err) {console.log(err); return;} // если ошибка - вывести и остановить запуск
        console.log("http://localhost:3000");
        app.listen(3000); // если все ок - запустить веб сервер
    }
);