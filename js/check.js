/*  https://www.youtube.com/watch?v=XJKXlxn9e-g&t=292s   */

function check()
{
    var number = document.getElementById("pole").value;
    
    if (number>0) document.getElementById("result").innerHTML="plus";
    else if (number<0) document.getElementById("result").innerHTML="minus";
    else if(number==0) document.getElementById("result").innerHTML="zero";
    else document.getElementById("result").innerHTML="Its not a number!";
}