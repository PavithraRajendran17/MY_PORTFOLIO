
// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Simple contact form handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for reaching out, Pavithra! Your message has been noted.');
        contactForm.reset();
    });
}

console.log("Pavithra's Portfolio loaded successfully!");

// Custom Cursor Effect
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

if (cursorDot && cursorOutline) {
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });
}

// Mouse move effect for background particles
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20; // Move range X
    const y = (e.clientY / window.innerHeight - 0.5) * 20; // Move range Y

    const particles = document.querySelectorAll('.bg-particles');
    particles.forEach((particle, index) => {
        const speed = (index + 1) * 0.5; // Ovvoru layer-kum different speed
        particle.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
=======
// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Simple contact form handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for reaching out, Pavithra! Your message has been noted.');
        contactForm.reset();
    });
}

console.log("Pavithra's Portfolio loaded successfully!");

// Custom Cursor Effect
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

if (cursorDot && cursorOutline) {
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });
}

// Mouse move effect for background particles
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20; // Move range X
    const y = (e.clientY / window.innerHeight - 0.5) * 20; // Move range Y

    const particles = document.querySelectorAll('.bg-particles');
    particles.forEach((particle, index) => {
        const speed = (index + 1) * 0.5; // Ovvoru layer-kum different speed
        particle.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });

});