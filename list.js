// returns list of blog posts:
module.exports = (mongoClient, collection, url, callback, tag) => {
  var tag = null || tag;
  mongoClient.connect(url, (err, db) => {
    db.collection(collection).find(tag).toArray((err, docs) => {
      callback(err, docs);
    });
    db.close();
  });
}
