// hamburger menu
const burgerBtn = document.querySelector(".burger-btn");
const navMenu = document.querySelector(".nav-menu");

burgerBtn.addEventListener("click", hamburgerMenu)

function hamburgerMenu() {
    burgerBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.body.classList.toggle("no-scroll")
}

// search animation
const searchWrapper = document.querySelector(".search-wrapper");
const searchInput = document.querySelector(".search-input");
const searchIcon = document.querySelector(".search-icon");
const clear = document.querySelector(".clear");

searchIcon.addEventListener("click", search)

function search() {
    searchWrapper.classList.toggle("active");
    searchInput.classList.toggle("active");
    searchIcon.classList.toggle("active");
    clear.classList.toggle("active");
}