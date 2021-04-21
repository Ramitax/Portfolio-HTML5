menu = document.getElementById('menu')
header = document.querySelector('header')
navbar = document.querySelectorAll('.navbar__item')
form = document.querySelector('form')
data = document.querySelectorAll('input.box, textarea.box')
btn = document.querySelector('.submit')
covid = document.getElementById('project_covid')
cashier = document.getElementById('project_cashier')
searcher = document.getElementById('project_searcher')
finance = document.getElementById('project_finance')
inventory = document.getElementById('project_inventory')
store = document.getElementById('project_store')

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
    location.href = "https://github.com/Ramitax/COVID-Analitycs"
})

cashier.addEventListener('click', (e) => {
    location.href = "https://github.com/Ramitax/CajeroAutomaticoTRZ"
})

searcher.addEventListener('click', (e) => {
    location.href = "https://github.com/Ramitax/TRZearcher"
})

finance.addEventListener('click', (e) => {
    location.href = "https://github.com/Ramitax/Finance-Firebase"
})

inventory.addEventListener('click', (e) => {
    location.href = "https://github.com/Ramitax/REST-API-Market"
})

store.addEventListener('click', (e) => {
    location.href = "https://colinshop.netlify.app/index"
})