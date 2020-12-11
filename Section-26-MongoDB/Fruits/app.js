const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const fruitSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, "fruit must have a name :)!"]
    },
    rating:{
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
    name: "Appl3",
    rating: 1,
    review: "This thing is nice and tasty, would recomend Honey Crisp"
});


//fruit.save();


// const kiwi = new Fruit ({
//     name: "Kiwi",
//     rating: 10,
//     review: "Would not eat"
// });
const banana = new Fruit ({
    name: "Banana",
    rating: 6,
    review: "Is kindof tasty"
});
banana.save();
// const orange = new Fruit ({
//     name: "Orange",
//     rating: 3,
//     review: "best of the best"
// });
const pineapple = new Fruit ({
    name: "Pineapple",
    rating: 10,
    review: "Very tasty!"
});
pineapple.save();

// Fruit.insertMany([kiwi,banana,orange],function(err){
//     if (err){
//         console.log(err);
//     } else{
//         console.log("Successfully saved the fruit to the fruitsDB");
//     }
// });

Fruit.find(function(err, fruits){
    if (err){
        console.log(err);
    } else{
        mongoose.connection.close();
        fruits.forEach(function(fruit){
            console.log(fruit.name);
        });
    }
});

// Fruit.updateOne({_id: "5fd3d578d79b392f6c00fe76"}, {name: "Peach"}, function(err){
//     if(err){
//         console.log(err);
//     } else{
//         console.log("Successfully updated document");
//     }
// })

// Fruit.deleteOne({_id: "5fd3d578d79b392f6c00fe76"}, function(err){
//     if(err){
//         console.log(err);
//     } else{
//         console.log("Successfully deleted document");
//     }
// })



const PersonSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person", PersonSchema);

const amy = new Person({
    name: "Amy",
    age: 17,
    favoriteFruit: pineapple
});

//amy.save();

const person = new Person({
    name: "John",
    age: 37,
});

Person.updateOne({name: "John"}, {favoriteFruit: banana}, function(err){
    if(err){
        console.log(err);
    } else{
        console.log("Updated John successfully");
    }
});
//person.save();

// Person.deleteMany({name: "John"}, function(err){
//     if(err){
//         console.log(err);
//     } else{
//         console.log("Deleted all the Johns!");
//     }
// });

console.log("this is running");