var express = require('express');

var app = express();

var port = 5000;

app.use(express.static('client'));

app.get('/', function (request, response) {
    response.send("Hello World");
});

app.get('/Football', function (request, response) {
    response.send("Have some passing yards");
});

app.listen(port, function (err) {
    console.log('running server on port:' + port);
});
