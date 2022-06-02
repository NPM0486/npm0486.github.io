/*  https://www.youtube.com/watch?v=XJKXlxn9e-g&t=1801s  */

var number = 1;
var timer1 = 0;
var timer2 = 0;


function slide_choose(nr)
{
    clearTimeout(timer1);
    clearTimeout(timer2);
    number = nr -1;

    hide_slide();
    setTimeout("slider()", 1000);
}

function hide_slide()
{
    $("#slider").fadeOut(1000);
}

function slider()
{
    if(number>2) number=1;

    var plik = "<img src=\"img/slider/" + number + ".png\" />";

    document.getElementById("slider").innerHTML = plik;
    $("#slider").fadeIn(1000);

    timer1 = setTimeout("slider()", 5000);
    timer2 = setTimeout("hide_slide()", 4000)
    number++;
}