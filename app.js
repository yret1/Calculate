

function clear(){
    this.currentOpperandTextElement = "";
    this.previousOpperandTextElement = "";
    this.operation = ""

};

function del(){

}

function appendNumber(number){

};

function chooseOperation(operation){

}

function compute(){

}

function updateDisplay(){

}


class Calculator{
    constructor(previousOpperandTextElement, currentOpperandTextElement){
        this.previousOpperandTextElement = previousOpperandTextElement
        this.currentOpperandTextElement =currentOpperandTextElement
        clear()
        appendNumber()
    }
};


const numberButtons = document.querySelectorAll(`[data-number]`)
const operationButtons = document.querySelectorAll(`[data-operation]`)
const equalsbutton = document.querySelector(`[data-equal]`)
const deletbutton = document.querySelector(`[data-delete]`)
const allClearbutton = document.querySelector(`[data-allClear]`)
const previousOpperandTextElement = document.querySelector(`[data-previous-opp]`)
const currentOpperandTextElement = document.querySelector(`[data-current-opp]`)


const calculator = new Calculator(previousOpperandTextElement, currentOpperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener(`click`, () =>{
        calculator.appendNumber(button.innerHTML)
        calculator.updateDisplay()
    })
})
operationButtons.forEach(button => {
    button.addEventListener(`click`, () =>{
        calculator.chooseOperation(button.innerHTML)
        calculator.updateDisplay()
    })
})