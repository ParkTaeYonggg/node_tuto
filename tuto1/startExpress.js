const express = require("express");
const start02 = express();
start02.get("/helloExpress", (req, res) => {
    res.send("Hello World");
});

module.exports = start02;
