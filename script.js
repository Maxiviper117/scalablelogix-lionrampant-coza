// Animate the h1 and loader using GSAP
window.addEventListener('DOMContentLoaded', () => {
  // Animate the h1
  gsap.from('h1', { 
    y: -50, 
    opacity: 0, 
    duration: 1, 
    ease: 'power2.out' 
  });

  // Animate the loader
  gsap.from('.loader', { 
    scale: 0, 
    opacity: 0, 
    duration: 1, 
    delay: 0.5, 
    ease: 'back.out(1.7)' 
  });

  // Typewriter effect
  const text = "Our website is launching soon...";
  const subtitle = document.getElementById('subtitle');
  subtitle.textContent = '';

  let tl = gsap.timeline();
  
  tl.to(subtitle, {
    duration: 2,
    text: {
      value: text,
      delimiter: ""
    },
    ease: "none",
    repeat: -1,
    repeatDelay: 1,
    onRepeat: () => {
      subtitle.textContent = '';
    }
  });
});
