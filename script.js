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
const upvoteHollow = document.querySelector(".upvote-hollow");
const upvoteFull = document.querySelector(".upvote-full");
const downvoteHollow = document.querySelector(".downvote-hollow");
const downvoteFull = document.querySelector(".downvote-full");

upvoteHollow.addEventListener("click", () => {
    upvoteHollow.classList.add("inactive");
    upvoteFull.classList.remove("inactive");
    downvoteHollow.classList.remove("inactive");
    downvoteFull.classList.add("inactive");
})

upvoteFull.addEventListener("click", () => {
    upvoteHollow.classList.remove("inactive");
    upvoteFull.classList.add("inactive");
})

downvoteHollow.addEventListener("click", () => {
    upvoteHollow.classList.remove("inactive");
    upvoteFull.classList.add("inactive");
    downvoteHollow.classList.add("inactive");
    downvoteFull.classList.remove("inactive");
})

downvoteFull.addEventListener("click", () => {
    downvoteHollow.classList.remove("inactive");
    downvoteFull.classList.add("inactive");
})