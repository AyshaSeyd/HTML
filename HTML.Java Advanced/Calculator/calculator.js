"use strict";
const calculator = document.getElementById("Calculator")
const one = () => {
    calculator.value = parseInt(calculator.value);
}

const calc = (a,b,operator) =>{
    let result;
    switch(operator){
        case"+":
        result = a+b;
        break;
        case"-":
        result = a-b;
        break;
        case"*":
        result = a*b;
        break;
        case"/":
        result = a/b
        break;
    default:""

    }
}