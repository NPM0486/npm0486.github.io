//Variable declaration for displaing the input
var display = '0';

//Selecotr for the display
var displayHTML = document.querySelector('#display');

//Selector for the numbers
const sel = document.querySelectorAll('.num');

let count = 0;

//Function for displaying the input
//Looping through the numbers
for (let i = 0; i < sel.length; i++) {
    sel[i].addEventListener('click', function () {
        var num = sel[i].innerHTML;
        display += num;
        //If the first input is '.' then it will be '0.'
        if(display == '0.'){
            display = '0.';
            displayHTML.innerHTML = display;
        //Will replace 0 with number as first input
        }else if(display == '0' + num){
            display = num;
            displayHTML.innerHTML = display;
        //Will not allow to input more than one '.'
        }else if(num == '.'){
            for(let j = 0; j < display.length; j++){
                if(display[j] == '.'){
                    count = 0;
                    count++;
                    if(count > 1){
                        display = display.slice(0, j);
                        console.log(display);
                        displayHTML.innerHTML = display;
                    } else
                    {
                        displayHTML.innerHTML = display;
                    }
                }
            }
        //If none of above condition is true then it will display the input
        }else
        {
            displayHTML.innerHTML = display;
        }
    });
}

//Reset Function
var reset = document.querySelector('.reset');
reset.addEventListener('click', function () {
    display = '0';
    displayHTML.innerHTML = display;
    countOperations = 0;
    prevResult = '';
    result = 0;
});

//Delete Function
var del = document.querySelector('.del');
del.addEventListener('click', function () {
    display = display.slice(0, -1);
    if (display == '') {
        display = '0';
    };
    displayHTML.innerHTML = display;
});

//Func for operations
var countOperations = 0;
var result = 0;
var prevResult = '';

const operations = document.querySelectorAll('.func');

for (let i = 0; i < operations.length; i++) {
    operations[i].addEventListener('click', function () {
        if (operations[i].innerHTML != '=') {
            prevResult = operations[i].innerHTML;
        }
        if (countOperations == 0) {
            result = display;
            display = '0';
            displayHTML.innerHTML = display;
            countOperations++;
        } else {
            if (countOperations == 2){
                countOperations--;
            } else if (prevResult == '+') {
                result = parseFloat(result) + parseFloat(display);
            } else if (prevResult == '-') {
                result = parseFloat(result) - parseFloat(display);
            } else if (prevResult == 'x') {
                result = parseFloat(result) * parseFloat(display);
            } else if (prevResult == '/') {
                result = parseFloat(result) / parseFloat(display);
                if(result == 'Infinity'){
                    result = 'Error';
                }
                let resultString = result.toString();
                let resultDot = resultString.indexOf('.');
                let decimals = resultString.slice(resultDot + 1, resultString.length);
                if(decimals.length > 6){
                    result = result.toFixed(6);
                }
            }
            if (prevResult == '=') {
                result = display;
            }
            display = '0';
            displayHTML.innerHTML = display;
        }
        if (operations[i].innerHTML == '=') {
            displayHTML.innerHTML = '=' + result;
            prevResult = '=';
            countOperations++;
        }

    });
}

