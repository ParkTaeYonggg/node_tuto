const express = require("express");
const app = express();
const router = express.Router();

// 쿠키 구문 해석용
const cookieParser = require("cookie-parser");

router.get("/user/:path", (req, res, next) => {
    if (req.params.path === "honda") {
        res.render("<h1>혼다</h1>");
        next();
    } else {
        // 혼다라는 시맨틱주소가 들어오면 위에꺼 실행 
        // 그 외 주소가 들어오면 아래꺼 실행됨.
        next();
    }
})

router.get("/user/:path", (req, res, next) => {
    res.render("<h1>다른 요청</h1>");
});

// 쿠키분석용 유즈하기 : 함수임
app.use(cookieParser());

// 최종적으로 라우터를 앱 익스프레스가 사용함.
// 라우터 요청 별 처리 방식을 이렇게 하면 됨.
app.use("/", router);
module.exports = app;