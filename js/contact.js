
// Handle contact form submission with Formspree
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(contactForm);
    
    try {
      const response = await fetch('https://formspree.io/f/xjgjalgv', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        alert('Message sent successfully! I will get back to you soon.');
        contactForm.reset();
      } else {
        alert('Failed to send message. Please try again or email me directly.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again or email me directly.');
    }
  });
}
