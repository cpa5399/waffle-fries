var express = require('express');
var path = require('path');

var port = process.env.PORT || 3000;
var app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './src/index.html'));
    // res.send("Hello World");
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    }
});