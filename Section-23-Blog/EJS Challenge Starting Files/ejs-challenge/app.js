const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const lodash = require('lodash');
const mongoose = require('mongoose');

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));


mongoose.connect("mongodb+srv://admin-max:Test-123@cluster0.ny3db.mongodb.net/blog", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const postSchema = new mongoose.Schema({
  title: String,
  body: String
});

const Post = mongoose.model("Post", postSchema);

let posts = [];

// when adding a new post, you have to refresh before the new post appears.?
app.get("/", function (req, res) {
  Post.find({}, function (err, foundItems) {
    if (foundItems === 0) {
      Post.insertMany(posts, function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Successfully saved the default Posts to the db :) ");
        }
      });
      res.redirect("/");
    } else {
      console.log("postss " + posts);
      res.render("home", {
        homeContent: homeStartingContent,
        postsContent: foundItems
      })
    };
  });
});


app.get("/about", function (req, res) {
  res.render("about", {
    aboutContent: aboutContent
  });
});

app.get("/contact", function (req, res) {
  res.render("contact", {
    contactContent: contactContent
  });
});

app.get("/compose", function (req, res) {
  res.render("compose");
});

// start here
app.get("/posts/:title", function (req, res) {
  console.log(posts.length);
  posts.forEach(function (post) {

    let lowerReqTitle = lodash.lowerCase(req.params.title);
    let lowerPostTitle = lodash.lowerCase(post.title);
    console.log("lowerPostTitle " + lowerPostTitle + " lowerReqTitle " + lowerReqTitle);

    if (lowerPostTitle === lowerReqTitle) {
      console.log("post.body " + post.body);
      res.render("post", {
        titleContent: post.title,
        bodyContent: post.body
      });
    } else {
      console.log("No match");
    };
  });
});

app.post("/compose", function (req, res) {
  const reqTitleContent = req.body.postTitle;
  const reqBodyContent = req.body.postBody;

  const post = new Post({
    title: reqTitleContent,
    body: reqBodyContent
  });

  posts.push(post);

  
  post.save(function(err){
    if(!err){
      res.redirect("/");
    };
  });
  
  
  //console.log(posts.length);
  //res.redirect("/");
});



app.listen(3000, function () {
  console.log("Server started on port 3000");
});