// $("button").click(function(){
//     $("h1").fadeToggle();
// });

// $("button").click(function(){
//     $("h1").slideToggle();
// })

// $("button").click(function(){
//     $("h1").animate({opacity: 0.5});
// })

$("button").click(function () {
    $("h1").slideUp().slideDown().animate({opacity: 0.5})
});