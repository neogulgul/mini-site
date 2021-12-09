// hamburger menu
const burgerBtn = document.querySelector(".burger-btn");
const navMenu = document.querySelector(".nav-menu");

burgerBtn.addEventListener("click", hamburgerMenu)

function hamburgerMenu() {
    burgerBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.body.classList.toggle("no-scroll")
}

// search
const searchContainer = document.querySelector(".search-container");
const searchInput = document.querySelector(".search-input");
const searchIcon = document.querySelector(".search-icon");
const clear = document.querySelector(".clear");

searchIcon.addEventListener("click", search)
clear.addEventListener("click", clearInput)

function search() {
    searchContainer.classList.toggle("active");
    searchInput.classList.toggle("active");
    searchIcon.classList.toggle("active");
    clear.classList.toggle("active");
}

function clearInput() {
    document.getElementById('search-input').value = '';
}