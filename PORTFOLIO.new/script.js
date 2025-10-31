// Basic interactivity: menu toggle, scroll, contact form feedback, year update

document.addEventListener('DOMContentLoaded', function () {
  // header toggle for mobile
  const btnToggle = document.getElementById('btnToggle');
  const nav = document.getElementById('nav');

  btnToggle.addEventListener('click', function () {
    if (!nav.style.display || nav.style.display === 'none') {
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.position = 'absolute';
      nav.style.right = '18px';
      nav.style.top = '66px';
      nav.style.background = 'rgba(10,10,11,0.95)';
      nav.style.padding = '12px';
      nav.style.borderRadius = '10px';
    } else {
      nav.style.display = 'none';
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (window.innerWidth < 760) {
          nav.style.display = 'none';
        }
      }
    });
  });

  // Contact form basic validation and simulated send
  const contactForm = document.getElementById('contactForm');
  const sendBtn = document.getElementById('sendBtn');

  sendBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const msg = document.getElementById('message').value.trim();

    if (!name || !email || !msg) {
      alert('Please fill name, email and message.');
      return;
    }

    // simple simulated send
    sendBtn.textContent = 'Sending...';
    sendBtn.disabled = true;

    setTimeout(() => {
      sendBtn.textContent = 'Send Message';
      sendBtn.disabled = false;
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('subject').value = '';
      document.getElementById('message').value = '';
      alert('Message simulated as sent. Replace with real backend or email link.');
    }, 900);
  });

  // update year in footer
  document.getElementById('year').textContent = new Date().getFullYear();
});
