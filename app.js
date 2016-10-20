const http = require('http');
const express = require('express');
var app = express();
var blogPostsList = require('blog-posts-list')

app.use('/', express.static('public'));
app.get('/', function (req, res) {
  res.sendFile()
})

http.createServer(app).listen(1337, function() {console.log('Server Running...')});
