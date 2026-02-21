// Portfolio JavaScript

(function () {
    'use strict';

    // Theme Management
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;

    // Debug: Ver qué tema está guardado
    console.log('🎨 Theme Debug:');
    console.log('- Saved theme in localStorage:', localStorage.getItem('theme'));
    console.log('- Initial HTML data-theme:', html.getAttribute('data-theme'));

    // Si no hay tema guardado, usar el del HTML, sino usar el guardado
    const initialTheme = html.getAttribute('data-theme') || 'light';
    const savedTheme = localStorage.getItem('theme') || initialTheme;

    console.log('- Theme to apply:', savedTheme);

    html.setAttribute('data-theme', savedTheme);

    console.log('- Final HTML data-theme:', html.getAttribute('data-theme'));

    themeToggle?.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        console.log('🔄 Theme toggle:', currentTheme, '->', newTheme);
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Mobile Navigation
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger?.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.project-card, .blog-card, .timeline-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });

    // Active Navigation Link
    const sections = document.querySelectorAll('section[id]');

    function highlightNavLink() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLink?.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);

    // Form Handling (if needed)
    const contactForm = document.getElementById('contactForm');

    contactForm?.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        console.log('Form submitted:', formData);

        // Integrate with your backend or email service here
        // Example: fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })

        alert('Message sent successfully!');
        contactForm.reset();
    });

    // Lazy Loading Images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Console Message
    console.log('%cPortfolio', 'font-size: 16px; font-weight: bold; color: #2563eb;');
    console.log('%cInterested in the code? Let\'s connect.', 'font-size: 12px; color: #525252;');

    // Make project cards clickable
    document.querySelectorAll('.project-card').forEach(card => {
        card.style.cursor = 'pointer';
        
        card.addEventListener('click', (e) => {
            // Si el click fue en el link, dejar que el link maneje la navegación
            if (e.target.closest('.project-link')) {
                return;
            }
            
            // Buscar el link dentro de la card
            const link = card.querySelector('.project-link');
            if (link) {
                window.location.href = link.getAttribute('href');
            }
        });
    });

})();
