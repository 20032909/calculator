const inputCalc = document.querySelector(".account"),
    resultCalc = document.querySelector(".result");


function input(i){
    inputCalc.value = inputCalc.value + i
}

function result(){
    // if (eval(inputCalc.value) === undefined){
    //     resultCalc.value = eval(inputCalc.value)
    //     inputCalc.value = eval"0,00"
    // }
resultCalc.value = eval(inputCalc.value)
    inputCalc.value = eval(inputCalc.value)
}

function backspace(){
    inputCalc.value = inputCalc.value.substring(0, inputCalc.value.length-1)
}

function reset(){
    resultCalc.value = ''
    inputCalc.value = '0,00'
}
