var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
var app = express();
var port = 3000;


app.use(express.static(path.join(__dirname, '/client')));
app.use(bodyParser.urlencoded({'extended':false}));
app.use(bodyParser.json());
app.listen(port);
console.log('Server listening on ', port, '...')