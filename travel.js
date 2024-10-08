document.addEventListener("DOMContentLoaded", function() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-link');

    burger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});