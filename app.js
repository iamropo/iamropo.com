var http = require('http')
var express = require('express')
var app = express()

app.use('/', express.static('public'))

http.createServer(app).listen(1337, function() {console.log('Server Running...')})
