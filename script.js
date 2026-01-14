// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
  // Toggle menu on hamburger click
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Change icon based on menu state
    const icon = menuToggle.querySelector('img');
    if (navMenu.classList.contains('active')) {
      icon.src = './images/icon-close.svg';
      icon.alt = 'Close menu';
    } else {
      icon.src = './images/icon-hamburger.svg';
      icon.alt = 'Open menu';
    }
  });

  // Close menu when a link is clicked
  const navLinks = navMenu.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      const icon = menuToggle.querySelector('img');
      icon.src = './images/icon-hamburger.svg';
      icon.alt = 'Open menu';
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
      navMenu.classList.remove('active');
      const icon = menuToggle.querySelector('img');
      icon.src = './images/icon-hamburger.svg';
      icon.alt = 'Open menu';
    }
  });
}

// Add smooth scroll behavior for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// CTA Button click handler
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
  ctaButton.addEventListener('click', () => {
    // Trigger a visual feedback
    ctaButton.style.transform = 'scale(0.98)';
    setTimeout(() => {
      ctaButton.style.transform = '';
    }, 100);
    
    // Optional: You can add an alert or navigate to a demo page
    console.log('Schedule a demo clicked');
  });
}

// Window resize listener to close mobile menu on desktop
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    if (window.innerWidth > 768 && navMenu) {
      navMenu.classList.remove('active');
      const icon = menuToggle.querySelector('img');
      if (icon) {
        icon.src = './images/icon-hamburger.svg';
        icon.alt = 'Open menu';
      }
    }
  }, 250);
});

// Handle keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
    const icon = menuToggle.querySelector('img');
    if (icon) {
      icon.src = './images/icon-hamburger.svg';
      icon.alt = 'Open menu';
    }
  }
});
