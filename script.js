
// DARK AND LIGHT MODE
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("light");

    themeBtn.textContent =
        document.body.classList.contains("light")
        ? "🌙" : "☀️";
});

// TYPING ANIMATION
const words = [
    "CSE Student",
    "Web Developer",
    "Programmer",
    "Future Software Engineer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const typing = document.getElementById("typing");
    const word = words[wordIndex];

    typing.textContent = word.substring(0, charIndex);

    if (!deleting && charIndex < word.length) {
        charIndex++;
        setTimeout(typeEffect, 100);
    }
    else if (!deleting) {
        deleting = true;
        setTimeout(typeEffect, 1200);
    }
    else if (charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 50);
    }
    else {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 300);
    }
}

typeEffect();

// BACK TO TOP
document.getElementById("topBtn").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
