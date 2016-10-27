const http = require('http');
const express = require('express');
const mongodb = require('mongodb');

var app = express();
var mongoClient = mongodb.MongoClient;
var mongoURL = 'mongodb://localhost:27017/blog'; // 'blog' is the name of the database

app.use('/', express.static('public'));

http.createServer(app).listen(1337, function () {console.log('Server Running...')});
