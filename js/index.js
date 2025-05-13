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

    // ✅ Partner items scroll only below 1024px
    function startPartnerScroll() {
        const wrapper = document.querySelector(".Partiner_items");
        if (!wrapper) return;

        // Reset any previous transform if any
        wrapper.style.transform = '';

        // If screen size is greater than 1024 → don't animate
        if (window.innerWidth > 1024) return;

        wrapper.innerHTML += wrapper.innerHTML; // duplicate items
        let speed = 0.5;
        let scrollAmount = 0;
        let contentWidth = wrapper.scrollWidth / 2;

        function scrollNews() {
            scrollAmount += speed;
            if (scrollAmount >= contentWidth) {
                scrollAmount = 0;
            }
            wrapper.style.transform = `translateX(-${scrollAmount}px)`;
            requestAnimationFrame(scrollNews);
        }

        scrollNews();
    }

    startPartnerScroll();

    // ✅ Also restart on resize
    window.addEventListener('resize', function() {
        // reload the page to restart animation properly OR
        location.reload();   // safest way for your case
    });
});
