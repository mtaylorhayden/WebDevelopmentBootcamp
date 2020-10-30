const express = require('express');
// used to parse data
const bodyParser = require('body-parser');

const app = express();

// this urlencoded is what we use when we are getting data from an html form
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("The result is of the calculation is : " + result);
});

var weight;
var height;

app.get("/bmiCalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res){

    weight = Number(req.body.height);
    height = Number(req.body.weight);

    var result = Math.pow(weight / height, 2);

    res.send("The result is of the calculation is : " + result);
});

app.listen(3000, function(){
    console.log("Server running at port 3000");
});