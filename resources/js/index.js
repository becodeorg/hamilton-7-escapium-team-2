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


// Carousel Room
const cards = document.getElementsByClassName("card");
const nextButton = document.querySelector(".btn-next");
const prevButton = document.querySelector(".btn-prev");
let position = 0;
const numberOfSlides = cards.length;

function hideAllSlides() {
    // remove all slides not currently being viewed
    for (const card of cards) {
        card.classList.remove("card-item-visible");
        card.classList.add("card-item-hidden");
    }
}

const handleMoveToNextSlide = function (e) {
    hideAllSlides();

    // check if last slide has been reached
    if (position === numberOfSlides - 1) {
        position = 0; // go back to first slide
    } else {
        // move to next slide
        position++;
    }
    // make current slide visible
    cards[position].classList.add("card-item-visible");
}

const handleMoveToPrevSlide = function (e) {
    hideAllSlides();

    // check if we're on the first slide
    if (position === 0) {
        position = numberOfSlides - 1; // move to the last slide
    } else {
        // move back one
        position--;
    }
    // make current slide visible
    cards[position].classList.add("card-item-visible");
}

nextButton.addEventListener("click", handleMoveToNextSlide);
prevButton.addEventListener("click", handleMoveToPrevSlide);

