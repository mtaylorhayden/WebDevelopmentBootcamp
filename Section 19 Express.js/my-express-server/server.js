var express = require("express");
const app = express();

// this method is for when someone make a get request at the root of our website
// the function is a callback function that take the request and has a response
// this callback tells the server what to do when that GET requst happens
app.get("/", function(req, res){
    res.send("<h1>Hello World</h1>");
});

app.get("/contact", function(req, res){
    res.send("<h1>Contact me at: Nebraskamax@gmail.com</h1>");
});

app.get("/about", function(req, res){
    res.send("This is a lesson all about how my life got flipped turned upside down!");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});
