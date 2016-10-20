const fs = require('fs');
// Pass dir(s) as argument to list all the contenst of that dir
module.exports = function () {
  return arguments.forEach(function (path) {
    fs.readdir(path, function (err, posts) {
      return posts;
    })
  })
}
