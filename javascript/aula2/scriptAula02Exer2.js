const frm  = document.querySelector('form')

let firstNumber  = document.querySelector('#firstNumber')
let secondNumber = document.querySelector('#secondNumber')
let simbol = document.querySelector('#simbol')

let operadorSoma = document.querySelector('#calcular')

let text = document.querySelector('#text')


frm.addEventListener('submit', (e) => {
    e.preventDefault()

    firstNumber = Number(frm.firstNumber.value)
    secondNumber = Number(frm.secondNumber.value)


    let somar = firstNumber + secondNumber
    let subtracao = firstNumber - secondNumber
    let divisão = firstNumber / secondNumber
    let multiplicacao = firstNumber * secondNumber


    result.innerText = `
    Se somados: ${somar}\n 
    Se subtraidos: ${subtracao}\n
    Se multiplicados: ${multiplicacao}\n
    Se divididos: ${divisão.toFixed(2)}`
})