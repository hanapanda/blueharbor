document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetUrl = link.getAttribute('href');
            if (targetUrl) {
                document.body.classList.add('fade-out');
                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 500);
            }
        });

        // Highlight the active link
        if (window.location.href.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        }
    });

    // Change navbar background on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

window.addEventListener('scroll', () => {
    console.log('Scroll event detected'); // Test if scroll event is firing
    handleScrollAnimation();
});

// Carousel functionality
function nextSlide(carouselId) {
    const carousel = document.getElementById(carouselId);
    const firstSlide = carousel.firstElementChild;
    carousel.appendChild(firstSlide);
}

function previousSlide(carouselId) {
    const carousel = document.getElementById(carouselId);
    const lastSlide = carousel.lastElementChild;
    carousel.insertBefore(lastSlide, carousel.firstChild);
}
// scripts.js

// Function to handle smooth navigation with fade-out effect
function navigateTo(url) {
    document.body.classList.add('fade-out'); // Add the fade-out class to start the animation
    setTimeout(() => {
        window.location.href = url; // Redirect after the animation duration
    }, 500); // Match this with the CSS transition duration
}

// Ensure the page is visible with a fade-in effect when loaded
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('fade-in');
});


// scripts.js

// Function to handle smooth navigation with fade-out effect
function navigateTo(url) {
    document.body.classList.add('fade-out'); // Add the fade-out class to start the animation
    setTimeout(() => {
        window.location.href = url; // Redirect after the animation duration
    }, 500); // Match this with the CSS transition duration
}

// Function to handle scroll animations
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('fade-in');

    // Select all elements with the class 'scroll-hidden'
    const scrollElements = document.querySelectorAll('.scroll-hidden');

    // Function to check if an element is in view
    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;

        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    // Function to display an element by adding 'scroll-visible' class
    const displayScrollElement = (element) => {
        element.classList.add('scroll-visible');
        element.classList.remove('scroll-hidden');
    };

    // Function to hide an element by adding 'scroll-hidden' class
    const hideScrollElement = (element) => {
        element.classList.remove('scroll-visible');
        element.classList.add('scroll-hidden');
    };

    // Function to handle the scroll animation
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };

    // Add scroll event listener
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });

    // Trigger animation for elements already in view on load
    handleScrollAnimation();
});

