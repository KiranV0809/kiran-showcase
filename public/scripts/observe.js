const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal, .featured-reveal').forEach(el => observer.observe(el));

// Stagger: 2nd project card gets a delay
const cards = document.querySelectorAll('.project-card');
cards.forEach((card, i) => {
  if (i === 1) {
    card.style.transitionDelay = '0.12s';
  }
});
