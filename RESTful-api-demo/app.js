const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.connect('mongodb://localhost:27017/phoneDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const phoneSchema = new mongoose.Schema({
    name: String,
    details: String,
    serialNumber: Number
});

const Phone = mongoose.model('Phone', phoneSchema);

app.route('/phone')

    .get(function (req, res) {
        Phone.find(function (err, foundPhone) {
            if (!err) {
                res.send(foundPhone);
            } else {
                res.send(err);
            }
        });
    })

    .post(function (req, res) {
        console.log(req.body.name);
        console.log(req.body.details);
        console.log(req.body.serialNumber);

        const phone = new Phone({
            name: req.body.name,
            details: req.body.details,
            serialNumber: req.body.serialNumber
        });

        phone.save(function (err) {
            if (!err) {
                console.log("Successfully saved phone to DB");
            } else {
                console.log(err);
            }
        });
    })

    .delete(function (req, res) {
        Phone.deleteMany(function (err) {
            if (!err) {
                console.log("Successfully deleted all Phones in DB");
            } else {
                console.log(err);
            }
        });
    });

/////////////////////////////// specific routing /////////////////////

app.route("/phone/:phoneName")

    .get(function (req, res) {
        Phone.findOne({
                name: req.params.phoneName
            },
            function (err, foundPhone) {
                if (foundPhone) {
                    res.send(foundPhone)
                } else {
                    res.send("Couldn't find phone");
                }
            });
    })

    .put(function (req, res) {
        Phone.updateOne({
                name: req.params.phoneName
            }, {
                name: req.body.name
            },
            function (err) {
                if (!err) {
                    res.send("Successfully updated phone");
                }
            }
        );
    })

    .delete(function (req, res) {
        Phone.deleteOne({
                name: req.params.phoneName
            },
            function (err) {
                if (!err) {
                    res.send("Successfully deleted phone");
                } else {
                    res.send(err);
                }
            }
        );
    });

app.listen(3000, function () {
    console.log("Server started on port 3000");
});