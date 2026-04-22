
// Handle contact form submission
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  
  if (form) {
    form.addEventListener('submit', async function(event) {
      event.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const topic = document.getElementById('topic').value;
      const message = document.getElementById('message').value;

      const data = {
        name: name,
        email: email,
        topic: topic,
        message: message
      };

      try {
        // Replace with your backend URL when deployed
        const backendUrl = 'http://localhost:5000/api/contact'; // For local testing
        // OR use your deployed backend URL like: 'https://your-backend.vercel.app/api/contact'
        
        const response = await fetch(backendUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
          alert('Message sent successfully! I will get back to you soon.');
          form.reset();
        } else {
          alert('Failed to send message. Please try again or email me directly.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Failed to send message. Please try again or email me directly.');
      }
    });
  }
});
