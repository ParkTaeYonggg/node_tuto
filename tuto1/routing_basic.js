const express = require("express");
const bodyParser = require("body-parser");

// 익스프레스 객체 생성
const pr03 = express();
// 기본 포트설정
pr03.set("port", process.env.PORT || 80);

// 기본 앤코딩 설정
pr03.use(bodyParser.urlencoded({extended: true}));
pr03.use(bodyParser.json());

// 라우터 객체
const router = express.Router();

pr03.get("/hihiGet", (req, res) => {
    console.log(req);
    res.send(req);
});

// 라우터 등록도 해야함.
pr03.use("/", router);

//404 페이지
pr03.use("/", (req, res) => {
    res.status(404).send("<hi>404페이지~</hi>");
});

module.exports = pr03;
