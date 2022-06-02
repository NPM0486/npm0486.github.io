/*  https://www.youtube.com/watch?v=XJKXlxn9e-g&t=292s  */
var number1 = document.getElementById("first").value;
var number2 = document.getElementById("second").value;
var numbers = "";


function doit()
{

    if(number2 > number1)
    {
        for(i=number1; i<=number2; i++)
            {
                numbers = numbers + i + " ";
            }
        document.getElementById("numbers").innerHTML=numbers;
    }
    else document.getElementById("numbers").innerHTML="Error?";
}