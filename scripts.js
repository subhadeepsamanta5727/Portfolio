document.addEventListener('DOMContentLoaded', () => {
  emailjs.init("11F6jFT-AhQM1pWv1"); // Your actual EmailJS User ID

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
