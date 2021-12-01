// hamburger menu
const burgerBtn = document.querySelector(".burger-btn");
const navMenu = document.querySelector(".nav-menu");

burgerBtn.addEventListener("click", hamburgerMenu)

function hamburgerMenu() {
    burgerBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
}

// upvotes and downvotes
const upVote = document.querySelector(".upvote");
const downVote = document.querySelector(".downvote");

upVote.addEventListener("click", () => upVote.classList.toggle("active"));
downVote.addEventListener("click", () => downVote.classList.toggle("active"));