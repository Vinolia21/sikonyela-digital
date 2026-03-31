// Contact form handler
const form = document.querySelector('#contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you! We will contact you shortly.');
    form.reset();
  });
}

// Smooth scroll for same-page anchor links (if any)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});