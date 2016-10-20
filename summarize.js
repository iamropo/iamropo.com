// To summarize the description of the posts
// {header: <>, thumbnail: <>, description: <>}

module.exports = function (posts) {
  var summarizedPosts = [];
  posts.forEach(function (post) {
    var postData = Object.create(post); // take all the properties
    postData.description = postData.description.slice(0, 60) + '...'; // take out 60 characters
    summarizedPosts.push(postData);
  })
  return JSON.stringify(summarizedPosts);
}
