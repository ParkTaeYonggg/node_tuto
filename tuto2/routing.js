// 익스프레스 인스턴스를 만들어 준다.
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("할로 ~ /");
});

app.get("/move", (req, res) => {
    res.send("할로~ 무브~");
});
module.exports = app;