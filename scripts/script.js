menu = document.getElementById('menu')
header = document.querySelector('header')
navbar = document.querySelectorAll('.navbar__item')
form = document.querySelector('form')
data = document.querySelectorAll('input.box, textarea.box')
btn = document.querySelector('.submit')
covid = document.getElementById('covid')

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times')
    header.classList.toggle('toggle')
})
navbar.forEach(btn => {
    btn.addEventListener('click', () => {
        menu.classList.remove('fa-times')
        header.classList.remove('toggle')
    })
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
})

btn.addEventListener('click', (e) => {
    data.forEach(register => {
        console.log(register.value)
        register.value = ""
    })
})

covid.addEventListener('click', (e) => {
    window.location.href("https://github.com/Ramitax?tab=repositories")
})