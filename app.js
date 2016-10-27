const http = require('http');
const express = require('express');
const mongodb = require('mongodb');
// non npm modules
var list = require('./list');

var app = express();
var mongoClient = mongodb.MongoClient;
var mongoURL = 'mongodb://localhost:27017/blog'; // 'blog' is the name of the database

// callback to handle error
function respond(err, result) {
  return err ? 'No post found' : result;
}

function getPostList (callback, tag) => {
  var tag = null || tag;
  var posts;
  mongoClient.connect(mongoURL, (err, db) => {
    db.collection(collection).find(tag).toArray((err, docs) => {
      posts = callback(err, docs);
    });
    db.close();
  });
}

var posts = list()

// var posts = list(mongoClient, 'blogPosts', mongoURL, respond);
console.log(list.getList(mongoClient, 'blogPosts', mongoURL, respond))
app.use('/', express.static('public'));

http.createServer(app).listen(1337, () => {console.log('Server Running...')});
