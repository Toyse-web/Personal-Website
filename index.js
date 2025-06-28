
// JavaScript to toggle the mobile menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// For the typing and deleting effect
const words = ["Web Developer", "Designer", "Tech Enthusiast"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const existWord = "I am a ";

function type() {
    const typingElement = document.querySelector(".typing");
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typingElement.textContent = existWord + currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = existWord + currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 1000); // Pause before deleting
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 300);
    } else {
        setTimeout(type, isDeleting ? 50 : 100);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    type();
});

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.header');
  if (window.scrollY > 50) { // Adjust threshold (50px)
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
