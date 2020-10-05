// incase your script is not the first one
// $(document).ready(function(){
//     $("h1").css("color", "red");
// });

// this one gets the attribute
$("img").attr("src");

// this method sets the attribute and sets the href
$("a").attr("href", "https://www.yahoo.com");

// this is js below is the jquery version
document.getElementById("test").addEventListener("click", changeColor)

function changeColor(){
    $("h1").css("color", "yellow");
}

// event listener with jQuery
// click is the event, the annonymous function is the calllback
$("h1").click(function(){
    $("h1").css("color", "purple");
});

// another event listener
$(document).keypress(function(event){
    $("h1").html(event.key);
});

// for loop with jQuery
$("button").click(function(){
    $("h1").css("color", "red");
});

// on method
// first param is the event you're listening for. (click, keypress, mouseover), second param is the callback func
$(document).on("mouseover", function(){
    $("h1").css("color", "purple");
});

