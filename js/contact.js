
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

      console.log('Form values:', { name, email, topic, message });

      const data = {
        name: name,
        email: email,
        topic: topic,
        message: message
      };

      console.log('Data to send:', JSON.stringify(data));

      try {
        // Backend URL - using Vercel serverless function
        const backendUrl = 'https://riya-portfolio-2-beryl.vercel.app/api/contact';
        
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
