const fs = require('fs');
const http = require('http');
const express = require('express');
const mongodb = require('mongodb');
// custom modules

var app = express();
var mongoClient = mongodb.MongoClient;
var mongoURL = 'mongodb://localhost:27017/blog'; // 'blog' is the name of the database

// callback to respond list (& handle error)

// function arrangeList(data) {
//   var list = ''; // html
//   data.forEach((blog) => {
//     var header = '<h2>' + blog.header.replace('_', ' ') + '<h2>';
//     var thumbnail = '<img src=' + blog.thumbnail + '>';
//     var
//   });
// }

function respondList(err, docs, res) {
  // have to do more of coding

  res.send(err ? 'No posts found' : docs);
}

function respondPost(err, docs, res) {
  res.send(err? 'No posts found.' : docs);
}

// to get list  of posts
function getPostList (callback, res, tag) {
  var tag = null || tag;
  mongoClient.connect(mongoURL, (err, db) => {
    db.collection('blogPosts').find(tag).toArray((err, docs) => {
      callback(err, docs, res); // this is gonna
      db.close();
    });
  });
}

app.use('/', express.static('public'));
app.get('/', (req, res) => {
  getPostList(respond, res);
});

http.createServer(app).listen(1337, () => {console.log('Server Running...')});
