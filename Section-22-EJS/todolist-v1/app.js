const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const items = ["Buy food", "Cook food", "Eat food"];
const work = [];

app.get("/", function(req,res){

    const day = date.getDate();

    res.render('list', {listTitle: day, newListItems: items});
});


app.get("/about", function(req,res){
    res.render("about");
});

app.post("/", function(req,res){
    console.log(req.body);
    console.log(req.body.list);

    if(req.body.list == "Work"){
        work.push(req.body.newItem);
        res.redirect("/work");
    } else{
        items.push(req.body.newItem);
        res.redirect("/");
    }
});

app.get("/work", function(req, res){
    res.render('list', {listTitle: "Work", newListItems: work});
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});