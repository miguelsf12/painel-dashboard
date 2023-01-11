const body = document.querySelector('body')

let nav = document.querySelector('nav')

function alterarTema() {
    body.classList.toggle('dark')
}

function closeMenu() {
    nav.classList.toggle('close')
}