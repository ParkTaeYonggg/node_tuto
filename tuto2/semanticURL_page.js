const express = require("express");
const app = express();
const qs = require("querystring");

app.get("/", (req, res) => {
    res.send("<div>반갑슴<a href='/login'>로그인하기</a></div>");
})

app.get("/login", (req, res) => {

    res.send(`<form method="post" action="/login" name="frm" >
    <input type="text" placeholder="아이디 입력" name="id"/></br>
    <input type="password" placeholder="비밀번호 입력" name="pw"/></br>
    <button>로그인</button>
    </form>`);
})

app.post("/login", (req, res) => {
    const id = "front";
    const pw = "1234";
    let body = '';
    req.on("data", (data) => {
        body += data;
    })
    req.on("end", () => {
        console.log(body);
        // 이상태로 쓰면 그냥 스트링타입임. (위처럼)
        const postData = qs.parse(body);
        if (postData.id === id && postData.pw === pw) {
            res.send("로그인 됨.");
        } else {
            res.send("비번이나 아이디 중 하나 틀림.");
        }
    })
    
})


module.exports = app;