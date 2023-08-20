
// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const target = document.querySelector(e.target.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        });
    });
});

// Form Validation and Submission
const contactForm = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

contactForm.addEventListener("submit", async e => {
    e.preventDefault();

    if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || messageInput.value.trim() === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Simulate form submission delay
    contactForm.classList.add("submitting");
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Simulate successful submission
    contactForm.classList.remove("submitting");
    contactForm.reset();
    alert("Thank you for your message!");
});

// Interactive Animations
const animateElements = document.querySelectorAll(".animate");

window.addEventListener("scroll", () => {
    animateElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top <= windowHeight * 0.8) {
            element.classList.add("fadeIn");
        }
    });
});

// Portfolio Interaction (Example: Lightbox)
const portfolioItems = document.querySelectorAll(".portfolio-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-image");

portfolioItems.forEach(item => {
    item.addEventListener("click", () => {
        const imageURL = item.getAttribute("data-image");
        lightboxImage.src = imageURL;
        lightbox.classList.add("active");
    });
});

lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
});

lightboxImage.addEventListener("click", e => {
    e.stopPropagation();
});
audioElement.play();
