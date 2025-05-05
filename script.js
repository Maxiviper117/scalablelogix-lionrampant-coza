// Animate the h1 and loader using GSAP
window.addEventListener('DOMContentLoaded', () => {
  gsap.from('h1', { y: -50, opacity: 0, duration: 1, ease: 'power2.out' });
  gsap.from('.loader', { scale: 0, opacity: 0, duration: 1, delay: 0.5, ease: 'back.out(1.7)' });
});

// Simple animation for subtitle text
const subtitle = document.getElementById('subtitle');
let dots = 0;
setInterval(() => {
  dots = (dots + 1) % 4;
  subtitle.textContent = 'Our website is launching soon' + '.'.repeat(dots);
}, 700);
