// Project Page JavaScript

(function() {
    'use strict';

    // Smooth scroll for anchor links
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

    // Navbar scroll effect
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

    // Intersection Observer for fade-in animations
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

    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
        '.tech-card, .feature-card, .learning-card, .result-card, .screenshot-item'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });

    // Code block copy functionality
    const codeBlocks = document.querySelectorAll('.code-block');
    
    codeBlocks.forEach(block => {
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-code-btn';
        copyButton.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="5" y="5" width="9" height="9" rx="1" stroke="currentColor" stroke-width="1.5"/>
                <path d="M3 11V3C3 2.44772 3.44772 2 4 2H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            <span>Copy</span>
        `;
        
        const header = block.querySelector('.code-header');
        if (header) {
            header.appendChild(copyButton);
            
            copyButton.addEventListener('click', async () => {
                const code = block.querySelector('code').textContent;
                
                try {
                    await navigator.clipboard.writeText(code);
                    copyButton.innerHTML = `
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M13 4L6 11L3 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>Copied!</span>
                    `;
                    
                    setTimeout(() => {
                        copyButton.innerHTML = `
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <rect x="5" y="5" width="9" height="9" rx="1" stroke="currentColor" stroke-width="1.5"/>
                                <path d="M3 11V3C3 2.44772 3.44772 2 4 2H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                            <span>Copy</span>
                        `;
                    }, 2000);
                } catch (err) {
                    console.error('Failed to copy code:', err);
                }
            });
        }
    });

    // Add copy button styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .copy-code-btn {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
            background-color: transparent;
            border: 1px solid #3d3d3d;
            border-radius: 6px;
            color: #abb2bf;
            font-size: 0.875rem;
            cursor: pointer;
            transition: all 0.2s;
        }
        
        .copy-code-btn:hover {
            background-color: #3d3d3d;
            border-color: #61afef;
            color: #61afef;
        }
        
        .copy-code-btn svg {
            flex-shrink: 0;
        }
    `;
    document.head.appendChild(style);

    // Lazy load images
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

    // External link indicator
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        if (!link.querySelector('svg')) {
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });

    console.log('%cProject Page Loaded', 'color: #61afef; font-weight: bold;');

})();
