// Update active nav link based on current page
function updateActiveNav() {
  const navLinks = document.querySelectorAll('.nav-links a');
  const currentPath = window.location.pathname;
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    const isActive = 
      (currentPath.includes('index.html') && href.includes('index')) ||
      (currentPath.includes('about.html') && href.includes('about')) ||
      (currentPath.includes('projects.html') && href.includes('projects')) ||
      (currentPath.includes('contact.html') && href.includes('contact')) ||
      (currentPath === '/' && href.includes('index'));
    
    if (isActive) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', updateActiveNav);

// Update on page focus
window.addEventListener('focus', updateActiveNav);
