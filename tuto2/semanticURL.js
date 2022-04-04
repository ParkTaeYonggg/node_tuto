const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.send("반갑습니더.");
})

app.get("/semantic/:pageId", (req, response) => {
    response.send("semanticURL : " + req.params["pageId"]);
})

module.exports = app;