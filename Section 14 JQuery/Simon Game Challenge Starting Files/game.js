var buttonColors = ["blue", "green", "yellow", "red"];
var gamePattern = [];
var userClickedPattern = [];
var level = 1;
var answer = false;
var started = true;
var isGood = false;



// this is the problem
function checkAnswer(userClickedPattern) {
    console.log(gamePattern);
    console.log(userClickedPattern);


    for (i = 0; i < gamePattern.length; i++) {

        if (gamePattern[i] === userClickedPattern[i]) {
            isGood = true;
        } else {
            return false;
        }
    }
    return isGood;
}

///////////////////////////////////////


$(".btn").click(function (e) {

    var userChosenColor = e.target.id;

    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);

    animtePress(userChosenColor);

    answer = checkAnswer(userClickedPattern);

    if (answer === true && userClickedPattern.length === gamePattern.length) {
        userClickedPattern.length = 0;
        setTimeout(nextSequence, 1000);
        level++;
    } else if (answer === false && userClickedPattern.length === gamePattern.length) {
        $("h1").html("Game Over, Press any key to restart");
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over");

        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        userClickedPattern.length = 0;
        started = true;
    }
});










function nextSequence() {
    answer = false;
    $("h1").html("Level " + level);


    var randomNumber = Math.floor(Math.random() * (4 - 0) + 0);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);

    animtePress(randomChosenColor);
}


function startOver() {
    level = 0;
    gamePattern.length = 0;
    //started = true;
    setTimeout(nextSequence, 200);
}


$(document).keypress(function () {
    if (started === true) {
        started = false;
        nextSequence();
    }
    // if($("h1").text() == "Game Over, Press any key to restart"){
    //     console.log("it shouldn't go here");
    //     startOver();
    // } else{
    //     console.log("it should go here")
    // }

});

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
};

function animtePress(currentColor) {
    $("#" + currentColor).addClass("pressed")

    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 250);

    console.log(currentColor);
}