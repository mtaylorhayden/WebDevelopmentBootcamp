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

$("#table tr td").each(function(){
    console.log(this);
    if(this.innerText == "Smith"){
        console.log(this);
        $(this).hide();
    }
})



// var tbody = $("#table")[0].childNodes[1];
// console.log(tbody);

// var tr = $(tbody).childern();
// console.log(tr);