// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Get all navigation links and content sections
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');

    // Main function to show/hide sections
    const showSection = (sectionId) => {
        // 1. Hide ALL sections
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // 2. Display the desired section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // 3. Update the 'active' state for navigation links
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === sectionId) {
                link.classList.add('active');
            }
        });
        
        // Scroll to the top of the page after switching sections (creates a 'page change' feeling)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Set up click event listener for navigation buttons
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Get the ID of the section to display from the data-section attribute
            const targetSectionId = this.getAttribute('data-section');
            showSection(targetSectionId);
        });
    });

    // // Form Submission Handling (Commented out as per mailto: functionality)
    // const contactForm = document.querySelector('.contact-form');
    // if (contactForm) {
    //     contactForm.addEventListener('submit', function(e) {
    //         e.preventDefault();
    //         alert('Thank you for contacting us! The data has been sent (simulated).');
    //         contactForm.reset();
    //     });
    // }
});