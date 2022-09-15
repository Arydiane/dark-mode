const button = document.querySelector("#btn")
const circle = document.querySelector('#circle')

button.addEventListener("click", () => {
    circle.style.left = (circle.style.left === '' || circle.style.left === '5%') ? '65%' : '5%';
    document.body.classList.toggle("dark-mode")
})