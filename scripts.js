// Run everything after DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll to sections
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
        });
      }
    });
  });

  // Initialize EmailJS
  (function () {
    emailjs.init("11F6jFT-AhQM1pWv1"); // Replace with your actual EmailJS User ID
  })();

  // Form submission with EmailJS and validation
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.querySelector('#name').value.trim();
      const email = document.querySelector('#email').value.trim();
      const message = document.querySelector('#message').value.trim();
      const status = document.getElementById('form-status');

      if (!name || !email || !message) {
        alert('Please fill in all fields before submitting.');
        return;
      }

      status.textContent = "Sending...";

      emailjs.sendForm('service_9zjj5q8', 'template_8s3mxyk', this)
        .then(function () {
          status.textContent = "Message sent successfully!";
          form.reset();
        })
        .catch(function (error) {
          console.error('FAILED...', error);
          status.textContent = "Failed to send message. Please try again.";
        });
    });
  }
});

// Redirect to GitHub
function redirectToGitHub(url) {
  window.open(url, '_blank');
}

// Redirect to WhatsApp
function redirectToWhatsApp() {
  const phoneNumber = "+91-7063670228";
  const message = encodeURIComponent("Hello, I'd like to connect with you!");
  const url = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(url, "_blank");
}
