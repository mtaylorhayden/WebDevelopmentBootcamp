const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');
const {
    post
} = require('request');
const {
    json
} = require('body-parser');
const {
    response
} = require('express');

const app = express();

// we have to use this module and set extended as true to read the request object from the post method
app.use(bodyParser.urlencoded({
    extended: true
}));


// this is used to serve static pages (css, images)
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
})

// this method runs when a POST request happens on the index page
app.post("/", function (req, res) {
    // the req obj is the information sent from the web (form etc..)
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    // this is all of the informatino the api needs to make this post request for us
    // the api is expecting certain key/value pairs
    // but we have to format it for the api to be called correctly
    var data = {
        members: [{
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName
            }
        }]
    };

    // make the data a flat json file
    const jsonData = JSON.stringify(data);

    // url and options are both parameters the https.request needs
    const url = "https://us2.api.mailchimp.com/3.0/lists/716b3c8909";

    const options = {
        method: "post",
        auth: "max:888b3003eb22b2a879eacc087b80c7a4-us2"
    }

    // we make the request object. here is everything it needs to access whereever its going
    // the url tells it where to go, and the optionns give it authentication to get in to where its going
    const request = https.request(url, options, function (response) {

        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }

        response.on("data", function (data) {
            console.log(JSON.parse(data));
        })
    })
    console.log(response.statusCode)


    // this is what actually makes the request
    request.write(jsonData);

    //says we're done with the request
    request.end();
});

app.post("/failure", function(req, res){
    res.redirect("/");
})

app.listen(3000, function () {
    console.log("Server listening on port 3000");
});

// api key
//888b3003eb22b2a879eacc087b80c7a4-us2

//list id
//716b3c8909