/*!
 * Bulma Minimalist Theme for Pelican
 * Main JavaScript functionality
 */

(function() {
    'use strict';

    /**
     * Initialize navbar burger menu functionality
     */
    function initNavbarBurger() {
        const burger = document.querySelector('.navbar-burger');
        const menu = document.querySelector('.navbar-menu');
        
        if (burger && menu) {
            burger.addEventListener('click', function() {
                burger.classList.toggle('is-active');
                menu.classList.toggle('is-active');
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', function(event) {
                if (!burger.contains(event.target) && !menu.contains(event.target)) {
                    burger.classList.remove('is-active');
                    menu.classList.remove('is-active');
                }
            });
            
            // Close menu on escape key
            document.addEventListener('keydown', function(event) {
                if (event.key === 'Escape') {
                    burger.classList.remove('is-active');
                    menu.classList.remove('is-active');
                }
            });
        }
    }

    /**
     * Add smooth scrolling for anchor links
     */
    function initSmoothScrolling() {
        const anchors = document.querySelectorAll('a[href^="#"]');
        
        anchors.forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;
                
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    /**
     * Add loading states to external links
     */
    function initExternalLinks() {
        const externalLinks = document.querySelectorAll('a[href^="http"]:not([href*="' + location.hostname + '"])');
        
        externalLinks.forEach(link => {
            // Add security attributes
            link.setAttribute('rel', 'noopener noreferrer');
            link.setAttribute('target', '_blank');
            
            // Optional: Add external link indicator
            if (!link.querySelector('.icon')) {
                const icon = document.createElement('span');
                icon.className = 'icon is-small';
                icon.innerHTML = '↗';
                icon.style.marginLeft = '0.25em';
                link.appendChild(icon);
            }
        });
    }

    /**
     * Initialize copy-to-clipboard for code blocks
     */
    function initCodeCopyButtons() {
        const codeBlocks = document.querySelectorAll('pre code');
        
        codeBlocks.forEach(codeBlock => {
            const pre = codeBlock.parentElement;
            const button = document.createElement('button');
            
            button.className = 'button is-small is-light';
            button.innerHTML = 'Copy';
            button.style.position = 'absolute';
            button.style.top = '0.5rem';
            button.style.right = '0.5rem';
            button.style.zIndex = '1';
            
            pre.style.position = 'relative';
            pre.appendChild(button);
            
            button.addEventListener('click', async function() {
                try {
                    await navigator.clipboard.writeText(codeBlock.textContent);
                    button.innerHTML = 'Copied!';
                    button.classList.add('is-success');
                    
                    setTimeout(() => {
                        button.innerHTML = 'Copy';
                        button.classList.remove('is-success');
                    }, 2000);
                } catch (err) {
                    console.error('Failed to copy code:', err);
                    button.innerHTML = 'Failed';
                    button.classList.add('is-danger');
                    
                    setTimeout(() => {
                        button.innerHTML = 'Copy';
                        button.classList.remove('is-danger');
                    }, 2000);
                }
            });
        });
    }

    /**
     * Initialize lazy loading for images
     */
    function initLazyLoading() {
        if ('IntersectionObserver' in window) {
            const images = document.querySelectorAll('img[data-src]');
            
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            images.forEach(img => imageObserver.observe(img));
        }
    }

    /**
     * Initialize back-to-top button
     */
    function initBackToTop() {
        const button = document.createElement('button');
        button.className = 'button is-primary is-rounded';
        button.innerHTML = '↑';
        button.style.position = 'fixed';
        button.style.bottom = '2rem';
        button.style.right = '2rem';
        button.style.zIndex = '1000';
        button.style.display = 'none';
        button.setAttribute('aria-label', 'Back to top');
        
        document.body.appendChild(button);
        
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                button.style.display = 'block';
            } else {
                button.style.display = 'none';
            }
        });
        
        // Scroll to top when clicked
        button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    /**
     * Initialize theme functionality
     */
    function initTheme() {
        // Check for saved theme preference or default to system preference
        const savedTheme = localStorage.getItem('theme');
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const currentTheme = savedTheme || systemTheme;
        
        document.documentElement.setAttribute('data-theme', currentTheme);
        
        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
            }
        });
    }

    /**
     * Initialize all functionality when DOM is loaded
     */
    function init() {
        initNavbarBurger();
        initSmoothScrolling();
        initExternalLinks();
        initCodeCopyButtons();
        initLazyLoading();
        initBackToTop();
        initTheme();
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();