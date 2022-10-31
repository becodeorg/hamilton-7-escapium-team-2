// Hamburger Menu 

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__menu");
const search = document.querySelector(".nav__search");

hamburger.addEventListener("click", (e) => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    search.classList.toggle("active");
})

const link = document.querySelectorAll(".nav__item");

link.forEach(n => n.addEventListener("click", (e) => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    search.classList.remove("active");
}))