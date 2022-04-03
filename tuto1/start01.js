const http = require("http");
const url = require("url");
const start01 = http.createServer((request, response) => {
    const _url = request.url;
        const urlurl = url.parse(_url, true).query;
        console.log(urlurl.a);
        response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
        response.end("hello node : url 스위치 초기작업", "utf-8");
});

module.exports = start01;