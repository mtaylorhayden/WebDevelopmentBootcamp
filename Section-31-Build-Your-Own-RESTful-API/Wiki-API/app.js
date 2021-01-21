const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const lodash = require('lodash');
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

mongoose.connect('mongodb://localhost:27017/WikiDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const artilceSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Article = new mongoose.model("Article", artilceSchema);

const testing = new Article({
    title: "Testing",
    content: "This is a test to see if this works"
});

app.get("/articles", function (req, res) {
    Article.find(function (err, foundArticles) {
        if(!err){
            res.send(foundArticles);
        } else {
            res.send(err);
        }
    });
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});