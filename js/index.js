checkNavbar();
function toggleMenu() {
    document.querySelector('.nav-links-wrapper').classList.toggle('active');
}

function checkNavbar() {
    const burger = document.getElementById('burger');
    const navLinks = document.querySelector('.nav-links-wrapper');
    const burgerDisplay = window.getComputedStyle(burger).display;

    if (burgerDisplay === 'none') {
        navLinks.classList.remove('active');
        navLinks.style.display = 'flex';
    } else {
        navLinks.classList.remove('active');
        navLinks.style.display = 'none';
    }
}

window.addEventListener('resize', checkNavbar);