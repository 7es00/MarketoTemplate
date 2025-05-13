document.addEventListener("DOMContentLoaded", function () {
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

    // ✅ Partner scroll only below 1024px
    const wrapper = document.querySelector(".Partiner_items");
    if (!wrapper) return;

    const mediaQuery = window.matchMedia("(max-width: 1024px)");

    function startScroll() {
        if (!mediaQuery.matches) {
            wrapper.style.transform = '';
            return;
        }

        // duplicate once
        if (!wrapper.dataset.duplicated) {
            wrapper.innerHTML += wrapper.innerHTML;
            wrapper.dataset.duplicated = "true";
        }

        let speed = 0.5;
        let translateX = 0;
        let scrollWidth = wrapper.scrollWidth / 2;

        function scroll() {
            translateX -= speed;
            if (Math.abs(translateX) >= scrollWidth) {
                translateX = 0;
            }
            wrapper.style.transform = `translateX(${translateX}px)`;
            requestAnimationFrame(scroll);
        }

        scroll();
    }

    startScroll();

    mediaQuery.addEventListener("change", startScroll);
});
