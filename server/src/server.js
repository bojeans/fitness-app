"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// server/src/server.ts
var express_1 = require("express");
var app = (0, express_1.default)();
var port = process.env.PORT || 5001;
app.get('/', function (req, res) {
    res.send('Hello, this is your Express server!');
});
app.listen(port, function () {
    console.log("Server is running on port ".concat(port));
});
