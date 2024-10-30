// document.addEventListener('DOMContentLoaded', function() {
//     var mobileBtn = document.getElementById('mobile_btn');
//     var mobileMenu = document.getElementById('mobile_menu');
//     var icon = mobileBtn.querySelector('i');

//     mobileBtn.addEventListener('click', function(e) {
//         e.stopPropagation();
//         mobileMenu.classList.toggle('active');
//         icon.classList.toggle('fa-bars');
//         icon.classList.toggle('fa-x');
//     });

//     const sections = document.querySelectorAll('section');
//     const navItems = document.querySelectorAll('.nav-item');

//     window.addEventListener('scroll', function () {
//         const header = document.querySelector('header');
//         const scrollPosition = window.scrollY - header.offsetHeight;

//         let activeSectionIndex = 0;

//         if (scrollPosition <= 0) {
//             header.style.boxShadow = 'none';
//         } else {
//             header.style.boxShadow = '5px 1px 5px rgba(0, 0, 0, 0.1)';
//         }

//         sections.forEach((section, i) => {
//             const sectionTop = section.offsetTop - 110;
//             const sectionBottom = sectionTop + section.offsetHeight;

//             if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
//                 activeSectionIndex = i;
//                 return;
//             }
//         });

//         navItems.forEach((navItem) => {
//             navItem.classList.remove('active');
//         });
//         navItems[activeSectionIndex].classList.add('active');
//     });

//     ScrollReveal({
//         reset: true,
//         distance: '10px',
//         duration: 2000,
//         delay: 100
//     });

//     ScrollReveal().reveal('#cta', { origin: 'left' });
//     ScrollReveal().reveal('#banner', { origin: 'right' });
//     ScrollReveal().reveal('.dish', { origin: 'right' });
//     ScrollReveal().reveal('#testimonials_content', { origin: 'right' });
//     ScrollReveal().reveal('#testimonial_chef', { origin: 'left' });

// });
