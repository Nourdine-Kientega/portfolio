import ScrollReveal from 'scrollreveal';
import Typed from 'typed.js';

// Fonction pour configurer ScrollReveal
export const initScrollReveal = () => {
  ScrollReveal({ distance: '80px', duration: 2000, delay: 200 });
  ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
  ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
  ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
  ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
};

// Fonction pour configurer Typed.js
export const initTypedJs = (elementSelector) => {
  const typedInstance = new Typed(elementSelector, {
    strings: ['Frontend Developer', 'Blogger'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });

  // Retourner l'instance pour permettre un nettoyage ultérieur
  return typedInstance;
};
