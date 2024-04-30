// Toggle hamburger menu
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
  hamburger.classList.toggle("active");
});

// Add event listeners for smooth scrolling
const navLinks = document.querySelectorAll("nav a, .cta.smooth-scroll");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      if (menu.classList.contains("show")) {
        menu.classList.remove("show");
        hamburger.classList.remove("active");
      }
    }
  });
});
