
// /*============================= scroll section active links ===============================*/
// let menuIcon = document.querySelector('#menu-icon');
// let navBar = document.querySelector('.navbar');

// const sliders = document.querySelectorAll('.sliders slider');

// /*============================= languages and mode section active links ===============================*/
// console.log(sliders, 'Hi');




// menuIcon.addEventListener('click', () => {
//     menuIcon.classList.toggle('bx-x');
//     navBar.classList.toggle('active');
// });



// /*============================= scroll section active links ===============================*/
// let sections = document.querySelectorAll('section');
// let navlinks = document.querySelectorAll('header nav a');

// window.onscroll = function () {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height) {
//             navlinks.forEach(link => {
//                 link.classList.remove('active');
//                 document.querySelector('header nav a[href*='+ id +']').classList.add('active');
//             });
//         }
//     });

// /*============================= sticky ===============================*/
// let header = document.querySelector('header');

// header.classList.toggle('sticky', window.scrollY > 100);

// /*============================= Remove nabar link when window scroll ===============================*/
// menuIcon.classList.remove('bx-x');
// navBar.classList.remove('active');

// };

// /*============================= Scroll reveal ===============================*/
// // ScrollReveal({ /*reset: true,*/ distance: '80px', duration: 2000, delay: 200 });
// // ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
// // ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
// // ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
// // ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// /*============================= Typed js ===============================*/
// // const typed = new Typed('.multiple-text',{
// //     strings: ['Frontend Developper', 'Youtuber', 'Blogger'],
// //     typeSpeed: 100,
// //     backSpeed: 100,
// //     backDelay: 1000,
// //     loop: true
// // });