let number1;
let number2;
let result;
function readInput(){
    number1=Number(document.getElementById("num1").value);
    number2=Number(document.getElementById("num2").value);
    document.getElementById("num1").style.color="blue"
}

function addition(){
    readInput();
    result = number1+number2;
    printResult(result);
}

function subtraction(){
    readInput();
    result = number1-number2;
    printResult(result);
}

function multiplication(){
    readInput();
    result = number1*number2;
    printResult(result);
}

function division(){
    readInput();
    result = number1/number2;
    printResult(result);
}

function printResult(result){
    let resultDiv=document.getElementById("result");
    resultDiv.innerHTML="Answer="+result;
}