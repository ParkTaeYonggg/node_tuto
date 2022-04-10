const qs = require("querystring");
const express = require("express");
const app = express();

const accessToLogin = (req, res) => {
    try {
        console.log(req.body)
        const id = "hellodigital";
        const pw = "1234";
            if (id === req.body.id && pw === req.body.pw) {
                res.json({
                    status: 200,
                    nickname: "헬디",
                    msg: "로그인 성공"
                });
            } else {
                res.json({
                    status: 200,
                    msg: "아이디 혹은 비밀번호가 올바르지 않습니다."
                })
            }
    } catch (err) {
        console.log(err, "로그인")
    }
}

app.post("/login", accessToLogin);

module.exports = app;