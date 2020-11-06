const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();

// we have to use this module and set extended as true to read the request object from the post method
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

// this is how you catch the POST method from the form
app.post("/", function (req, res) {
    const query = req.body.cityName;
    const apiKey = '619b47a806218b16325d2535e1e10607';
    const units = 'imperial';
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + units;
    const iconAccess = "http://openweathermap.org/img/wn/10d@2x.png"

    https.get(url, function (response) {
        console.log(response.statusCode);

        response.on("data", function (data) {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            console.log(weatherData);
            console.log(description);
            res.write("<h1>The temperature in " + query + " is " + temp + " degrees Fahrenheit.</h1><br>" +
                "<h2>The weather is currently " + description + ".</h2><br>");
            res.write("<img src=" + imageUrl + ">");
            res.send();
        });
    });
});






http: //openweathermap.org/img/wn/10d@2x.png
    app.listen(3000, function () {
        console.log("Server running on port 3000");
    });