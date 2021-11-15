let num = document.querySelectorAll('.chiffre');
let num1
let num2
let op

num.forEach(el => {
    el.addEventListener("click", () => {
        rep.innerHTML += el.innerText
        num2 = rep.innerHTML
    })
})

let erase = document.querySelector('.erase')
erase.addEventListener('click', () => {
    rep.innerHTML = ""
})

let operateur = document.querySelectorAll('.operateur');
operateur.forEach(el => {
    el.addEventListener('click', () => {
        num1 = num2
        rep.innerHTML = ""
        rep.innerHTML += el.innerText
        op = rep.innerHTML
    })
})

let egal = document.querySelector('.egal')
let rep = document.querySelector('.rep');
egal.addEventListener('click', () => {
    num1 = parseInt(num1);
    num2 = parseInt(num2.substr(1));
    switch (op) {
        case (op = "+"):
            rep.innerHTML = num1 + num2
            break;
        case (op = "-"):
            rep.innerHTML = num1 - num2
            break;
        case (op = "*"):
            rep.innerHTML = num1 * num2
            break;
        case (op = "/"):
            rep.innerHTML = num1 / num2
            break;
        default:
            break;
    }
})