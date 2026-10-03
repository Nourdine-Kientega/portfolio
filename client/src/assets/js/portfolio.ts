import ScrollReveal from 'scrollreveal';
import Typed from 'typed.js';

// Page element scrolling animations
export const initScrollReveal = () => {
    ScrollReveal({ distance: '80px', duration: 2000, delay: 200 });
    ScrollReveal().reveal('.hero-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.hero-img, .services-container, .project-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.hero-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.hero-content p, .about-content', { origin: 'right' });
};
  

// Multiple text animation
export const initTypedJs = (elementSelector: string) => {
    const typedInstance = new Typed(elementSelector, {
      strings: ['Développeur Web', 'Développeur Full Stack', 'Développeur Mobile'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });
  
    return typedInstance;
};