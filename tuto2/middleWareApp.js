const express = require("express");
const app = express();

const middleWareLog = (req, res, next) => {
    console.log("--------- 노드 실행 app.js ------");
    // 넥스트는 다음으로 해당 객체를 전달하기 위한 용도.
    req.middleTest = "로그실행";
    next();
}

// 미들웨어 사용하기 
app.use(middleWareLog);

app.get("/", (req, res) => {
    res.send(req.middleTest);
});

module.exports = app;