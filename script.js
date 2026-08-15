/* =========================================================
   PAVITHRA RAJENDRAN - COSMIC NEON PORTFOLIO
========================================================= */


/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


/* ================= CLOSE MOBILE MENU ================= */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* ================= SCROLL PROGRESS ================= */

const progressBar =
    document.querySelector(".scroll-progress");

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});


/* ================= SCROLL TOP ================= */

const scrollTop =
    document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        scrollTop.classList.add("show");
    } else {
        scrollTop.classList.remove("show");
    }

});

scrollTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ================= CUSTOM CURSOR ================= */

const cursorDot =
    document.querySelector(".cursor-dot");

const cursorRing =
    document.querySelector(".cursor-ring");

let mouseX = 0;
let mouseY = 0;

let ringX = 0;
let ringY = 0;


document.addEventListener("mousemove", (event) => {

    mouseX = event.clientX;
    mouseY = event.clientY;

    cursorDot.style.left = mouseX + "px";
    cursorDot.style.top = mouseY + "px";

});


function animateCursor() {

    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;

    cursorRing.style.left = ringX + "px";
    cursorRing.style.top = ringY + "px";

    requestAnimationFrame(animateCursor);

}

animateCursor();


/* ================= CURSOR HOVER ================= */

const interactiveElements =
    document.querySelectorAll("a, button, .glass-card");

interactiveElements.forEach(element => {

    element.addEventListener("mouseenter", () => {

        cursorRing.style.width = "42px";
        cursorRing.style.height = "42px";

    });

    element.addEventListener("mouseleave", () => {

        cursorRing.style.width = "28px";
        cursorRing.style.height = "28px";

    });

});


/* ================= REVEAL ANIMATION ================= */

const revealElements =
    document.querySelectorAll(
        ".glass-card, .skill-card, .project-card, .timeline-item"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("reveal");
                    entry.target.classList.add("active");

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* ================= PROJECT CARD TILT ================= */

const cards =
    document.querySelectorAll(".project-card");


cards.forEach(card => {

    card.addEventListener("mousemove", event => {

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -3;

        const rotateY =
            ((x - centerX) / centerX) * 3;

        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-5px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* ================= CONTACT FORM ================= */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", event => {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const message =
        document.getElementById("message").value;


    const subject =
        encodeURIComponent(
            `Portfolio Contact from ${name}`
        );


    const body =
        encodeURIComponent(
            `Name: ${name}\n\n` +
            `Email: ${email}\n\n` +
            `Message:\n${message}`
        );


    window.location.href =
        `mailto:pavithrapanimalar30@gmail.com?subject=${subject}&body=${body}`;

});


/* ================= ACTIVE NAVIGATION ================= */

const sections =
    document.querySelectorAll("section[id]");

const navItems =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });


    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {
            link.classList.add("active");
        }

    });

});


/* ================= PARALLAX HERO ================= */

const heroVisual =
    document.querySelector(".hero-visual");

document.addEventListener("mousemove", event => {

    if (!heroVisual) return;

    const x =
        (window.innerWidth / 2 - event.clientX) / 60;

    const y =
        (window.innerHeight / 2 - event.clientY) / 60;

    heroVisual.style.transform =
        `translate(${x}px, ${y}px)`;

});


/* ================= RANDOM STAR EFFECT ================= */

const starsContainer =
    document.querySelector(".stars");

for (let i = 0; i < 45; i++) {

    const star =
        document.createElement("span");

    star.style.position = "fixed";
    star.style.width = Math.random() * 2 + 1 + "px";
    star.style.height = star.style.width;
    star.style.background = "white";
    star.style.borderRadius = "50%";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.opacity = Math.random() * .8 + .2;
    star.style.animation =
        `twinkle ${2 + Math.random() * 4}s infinite alternate`;

    starsContainer.appendChild(star);

}


/* ================= TWINKLE STYLE ================= */

const style =
    document.createElement("style");

style.innerHTML = `

@keyframes twinkle {

    from {
        opacity: .2;
        transform: scale(.7);
    }

    to {
        opacity: 1;
        transform: scale(1.3);
    }

}

.nav-links a.active {
    color: #6c91ff;
    text-shadow: 0 0 15px rgba(89,125,255,.6);
}

`;

document.head.appendChild(style);


/* ================= PAGE LOAD ================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});