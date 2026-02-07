const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.nav-links');
let menuOpen = false;

hamburger.addEventListener('click', () => {
    if (menuOpen == false) {
        navlinks.computedStyleMap.display = "block";
        menuOpen = true;
    }
    else if (menuOpen == true) {
        navlinks.style.display = "none";
        menuOpen = false;
    }
})