const burgerBtn = document.querySelector(".burger-btn");

burgerBtn.addEventListener("click", hamburgerMenu)

function hamburgerMenu() {
    burgerBtn.classList.toggle("active");
}