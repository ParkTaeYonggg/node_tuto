// 에러로직은 모든 함수 최하단에 들어간다.
const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");

app.use(bodyParser());

// 에러처리 500 : use 로 에러를 처리함.
app.use((err, req, res, next) => {
    if (req.xhr) {
        res.status(500).send("=== ::: 500 에러 - something broken ::: ===");
    } else next(err);
}), (err, req, res, next) => {
    console.error(err);
};

// 에러처리 404
app.use((err, req, res, next) => {
    if (req.xhr) {
        res.status(404).send("=== ::: 404 에러 - 404 not found ::: ===");
    } else next(err);
}), (err, req, res, next) => {
    console.error(err)
};

// 나머지 모든 에러
app.use((err, req, res, next) => {
    if (req.xhr) {
        res.send(err + " : 관리자에게 문의하세요.");
    }
})


module.exports = app;