// MOBILE NAVIGATION

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", function () {
    navbar.classList.toggle("active");

    const isOpen = navbar.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll(".navbar a").forEach(function (link) {
    link.addEventListener("click", function () {
        navbar.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// CURRENT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();

// BACK TO TOP BUTTON

const topButton = document.getElementById("top-button");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

topButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
const words = [
    "Programmer",
    "Web Developer",
    "Creative Learner",
    "Future Software Engineer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const element = document.getElementById("typing-text");
    const word = words[wordIndex];

    if (!deleting) {
        element.textContent = word.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === word.length) {
            deleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }
    } else {
        element.textContent = word.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 110);
}

typeEffect();
