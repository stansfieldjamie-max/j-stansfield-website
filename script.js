const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuButton = document.getElementById('close-mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('-translate-x-full');
});

closeMenuButton.addEventListener('click', () => {
    mobileMenu.classList.add('-translate-x-full');
});

// Close menu when a link is clicked
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('-translate-x-full');
    });
});
