const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");


// 미들웨어 설정
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// 코스설정
app.use(cors());

app.use(require("./test01"));

// 404 및 500
app.use((err, req, res, next) => {
    if (req.xhr) {
        res.status(500).send("500 서버에러");
    } else { next(err); }
});

app.use((err, req, res, next) => {
    if (req.xhr) {
        res.status(404).send("404 not found");
    } else { next(err); }
})
app.use((err, req, res, next) => {res.send(err, "관리자에게 문의하세요.")});

module.exports = app;