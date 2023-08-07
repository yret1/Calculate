
function calculate(){
    const number1 = parseInt(prompt("Enter first number!"));
    const opperand = prompt("Enter +,-,/-?");
    const number2 = parseInt(prompt("Enter second number"))
    let result;


    if(opperand =="+"){
        result = number1 + number2
    }else if(opperand == "-"){
        result = number1- number2
    }else if(opperand == "*"){
        result = number1 * number2
    }else if(opperand == "/"){
        result = number1 / number2
    }

    window.alert(result)
}



calculate()