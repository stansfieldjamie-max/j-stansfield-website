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

// Get the sections and the button
const serviceToggleButton = document.getElementById('service-toggle-button');
const homepageSection = document.getElementById('homepage');
const servicesSection = document.getElementById('services-section');
const body = document.body;

serviceToggleButton.addEventListener('click', () => {
    if (servicesSection.classList.contains('hidden')) {
        // We are on the homepage, transition to services view
        servicesSection.classList.remove('hidden');
        serviceToggleButton.textContent = 'Back to Homepage';
        body.style.overflowY = 'scroll'; // Allow scrolling
        // Wait for the next frame to ensure the element is rendered before scrolling
        window.requestAnimationFrame(() => {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
        });
    } else {
        // We are in the services view, transition back to the homepage
        serviceToggleButton.textContent = 'Discover Our Services';
        
        // Smoothly scroll back to the top of the page
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        // Wait for the smooth scroll to finish before hiding the section and disabling scroll
        setTimeout(() => {
            servicesSection.classList.add('hidden');
            body.style.overflowY = 'hidden'; // Prevent scrolling
        }, 500); // 500ms delay to match the scroll animation duration
    }
});
