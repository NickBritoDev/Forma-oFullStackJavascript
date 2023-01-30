const frm = document.querySelector('form')

let firstName = document.querySelector('#firstname')
let lastname = document.querySelector('#lastname')
let age = document.querySelector('#age')
let work = document.querySelector('#work')

let text = document.querySelector('#text')


frm.addEventListener('submit', (e) => {
    e.preventDefault()
    firstName = frm.firstName.value
    lastname = frm.lastName.value
    work = frm.work.value
    age = frm.age.value

    text.innerText = `Ola ${firstName + lastname}, fico feliz em sabe que voce atua como ${work}, os nascidos em ${age} são realemnte bons !`
})