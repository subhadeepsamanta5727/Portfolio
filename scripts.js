//smooth scroll to sections
document.querySelectorAll('nav a').forEach(anchor =>{
    anchor.addEventListener('click',function(e){
        e.preventDefault();
        const target=document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior:'smooth',
        });
    });
});
//Form Submission handling
const form=document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();// prevent the page from reloading
//Get form data
const name=document.querySelector('#name').ariaValueMax.trim();
const email=document.querySelector('#email').ariaValueMax.trim();
const message=document.querySelector('#message').ariaValueMax.trim();
//form validation
if(!name||!email||!message){
    alert('please fill in all fields befor submitting.');
    return;
}
//Log the data 
console.log('Form submitted:');
console.log('Name:',name);
console.log('Email:',email);
console.log('message:',message);
//show success message to user
alert('Thank you for your message!I will get back to you soon.')
//reset the form
form.reset();
});
function redirectToGitHub(url) {
    window.open(url, '_blank'); // Opens the GitHub URL in a new tab
  }
// Initialize EmailJS
(function () {
    emailjs.init("11F6jFT-AhQM1pWv1"); // Replace with your EmailJS User ID
  })();
  
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Show sending status
    const status = document.getElementById('form-status');
    status.textContent = "Sending...";
  
    // Send email with form data
    emailjs.sendForm('service_9zjj5q8', 'template_8s3mxyk', this)
      .then(function () {
        status.textContent = "Message sent successfully!";
      })
      .catch(function (error) {
        console.log('FAILED...', error);
        status.textContent = "Failed to send message. Please try again.";
      });
  });
  // redirection to WhatsApp
  function redirectToWhatsApp() {
    const phoneNumber = "+91-7063670228";
    const message = encodeURIComponent("Hello, I'd like to connect with you!");
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };  
  