console.log("Portfolio Loaded Successfully");

// Contact Form

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    alert("Thank you! Your message has been received.");

    form.reset();

});

// Typing Animation

const text = "Frontend Web Developer";
const typing = document.getElementById("typing");

let index = 0;

function typeText() {

    if (index < text.length) {

        typing.textContent += text.charAt(index);

        index++;

        setTimeout(typeText, 100);

    }

}

typeText();
// ===========================
// Scroll Reveal Animation
// ===========================

ScrollReveal().reveal('.hero', {
    distance: '60px',
    duration: 1000,
    origin: 'top'
});

ScrollReveal().reveal('.about', {
    distance: '60px',
    duration: 1000,
    origin: 'left'
});

ScrollReveal().reveal('.skills', {
    distance: '60px',
    duration: 1000,
    origin: 'right'
});

ScrollReveal().reveal('.services', {
    distance: '60px',
    duration: 1000,
    origin: 'bottom'
});

ScrollReveal().reveal('.projects', {
    distance: '60px',
    duration: 1000,
    origin: 'top'
});

ScrollReveal().reveal('.contact', {
    distance: '60px',
    duration: 1000,
    origin: 'bottom'
});
// ===========================
// Mobile Menu
// ===========================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});
// ===========================
// Active Navbar
// ===========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 100;


        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ===========================
// Service Cards Animation
// ===========================

ScrollReveal().reveal(".service-card", {
    interval: 200,
    distance: "50px",
    duration: 1000,
    origin: "bottom"
});

// ===========================
// Project Cards Animation
// ===========================

ScrollReveal().reveal(".project-card", {
    interval: 200,
    distance: "50px",
    duration: 1000,
    origin: "bottom"
});

// ===========================
// Scroll To Top Button
// ===========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
window.addEventListener("load", () => {

    // Skills Animation
    document.querySelector(".html").style.width = "90%";
    document.querySelector(".css").style.width = "80%";
    document.querySelector(".javascript").style.width = "60%";

    // Hide Loader
    document.querySelector(".loader").classList.add("hidden");

});