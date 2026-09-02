// ================================
// DILEEP K. — PORTFOLIO JAVASCRIPT
// ================================

// Mobile navigation
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Close menu after clicking a navigation link
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}

// Contact form
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      formStatus.textContent = "Please fill in all fields.";
      return;
    }

    const subject = encodeURIComponent(
      "Portfolio Contact from " + name
    );

    const body = encodeURIComponent(
      "Name: " +
        name +
        "\nEmail: " +
        email +
        "\n\nMessage:\n" +
        message
    );

    window.location.href =
      "mailto:ddileepk687@gmail.com?subject=" +
      subject +
      "&body=" +
      body;

    formStatus.textContent = "Opening your email application...";
  });
}

// Current year in footer
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}