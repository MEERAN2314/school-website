// Animation Controller for International Kidz World Website

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

// Create intersection observer
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            
            // Add staggered animation for child elements
            const children = entry.target.querySelectorAll('.stagger-child');
            children.forEach((child, index) => {
                setTimeout(() => {
                    child.classList.add('animate');
                }, index * 100);
            });
        }
    });
}, observerOptions);

// Initialize scroll animations
function initializeScrollAnimations() {
    // Elements to animate on scroll
    const animateElements = document.querySelectorAll(`
        .animate-on-scroll,
        .animate-on-scroll-left,
        .animate-on-scroll-right,
        .animate-on-scroll-scale,
        .reveal,
        .reveal-left,
        .reveal-right,
        .reveal-scale,
        .highlight-card,
        .program-card,
        .testimonial-card,
        .gallery-item,
        .section-header
    `);
    
    animateElements.forEach(el => {
        scrollObserver.observe(el);
    });
}

// Staggered animations for grids
function initializeStaggeredAnimations() {
    const grids = document.querySelectorAll('.highlights-grid, .programs-grid, .testimonials-grid, .gallery-preview');
    
    grids.forEach(grid => {
        const items = grid.children;
        Array.from(items).forEach((item, index) => {
            item.style.animationDelay = `${index * 0.1}s`;
            item.classList.add('stagger-child');
        });
    });
}

// Hero section animations
function initializeHeroAnimations() {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        const elements = heroContent.children;
        Array.from(elements).forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.8s ease-out';
            element.style.animationDelay = `${index * 0.2}s`;
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, (index * 200) + 500);
        });
    }
}

// Card hover animations
function initializeCardAnimations() {
    const cards = document.querySelectorAll('.highlight-card, .program-card, .testimonial-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            
            const icon = this.querySelector('.highlight-icon, .program-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(3deg)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            
            const icon = this.querySelector('.highlight-icon, .program-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
}

// Gallery animations
function initializeGalleryAnimations() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const img = this.querySelector('img');
            const overlay = this.querySelector('.gallery-overlay');
            
            if (img) {
                img.style.transform = 'scale(1.1)';
            }
            if (overlay) {
                overlay.style.opacity = '1';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const img = this.querySelector('img');
            const overlay = this.querySelector('.gallery-overlay');
            
            if (img) {
                img.style.transform = 'scale(1)';
            }
            if (overlay) {
                overlay.style.opacity = '0';
            }
        });
    });
}

// Button animations
function initializeButtonAnimations() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            
            const icon = this.querySelector('i[data-lucide]');
            if (icon) {
                icon.style.transform = 'translateX(3px)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            
            const icon = this.querySelector('i[data-lucide]');
            if (icon) {
                icon.style.transform = 'translateX(0)';
            }
        });
        
        // Click animation
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-2px)';
            }, 150);
        });
    });
}

// Navbar animation on scroll
function initializeNavbarAnimations() {
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });
}

// Text animation effects
function initializeTextAnimations() {
    const gradientTexts = document.querySelectorAll('.gradient-text');
    
    gradientTexts.forEach(text => {
        text.addEventListener('mouseenter', function() {
            this.style.backgroundSize = '200% 200%';
            this.style.animation = 'gradientShift 1s ease infinite';
        });
        
        text.addEventListener('mouseleave', function() {
            this.style.backgroundSize = '100% 100%';
            this.style.animation = 'none';
        });
    });
}

// Loading animations
function initializeLoadingAnimations() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        if (!img.complete) {
            img.style.opacity = '0';
            img.style.transform = 'scale(0.9)';
            
            img.addEventListener('load', function() {
                this.style.transition = 'all 0.5s ease-out';
                this.style.opacity = '1';
                this.style.transform = 'scale(1)';
            });
        }
    });
}

// Parallax effect for hero section
function initializeParallaxEffect() {
    const heroBackground = document.querySelector('.hero-bg-img');
    
    if (heroBackground) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            heroBackground.style.transform = `translateY(${rate}px)`;
        });
    }
}

// Counter animation for statistics
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        // Start animation when element is visible
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    counterObserver.unobserve(entry.target);
                }
            });
        });
        
        counterObserver.observe(counter);
    });
}

// Typewriter effect
function initializeTypewriterEffect() {
    const typewriterElements = document.querySelectorAll('.typewriter');
    
    typewriterElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        element.style.borderRight = '2px solid';
        element.style.animation = 'blink 1s infinite';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                element.style.borderRight = 'none';
                element.style.animation = 'none';
            }
        };
        
        // Start typewriter when element is visible
        const typewriterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(typeWriter, 500);
                    typewriterObserver.unobserve(entry.target);
                }
            });
        });
        
        typewriterObserver.observe(element);
    });
}

// Floating elements animation
function initializeFloatingElements() {
    const floatingElements = document.querySelectorAll('.float');
    
    floatingElements.forEach((element, index) => {
        element.style.animation = `float ${3 + (index * 0.5)}s ease-in-out infinite`;
        element.style.animationDelay = `${index * 0.2}s`;
    });
}

// Page transition animations
function initializePageTransitions() {
    // Add page transition class to body
    document.body.classList.add('page-transition');
    
    // Handle page transitions for internal links
    const internalLinks = document.querySelectorAll('a[href^="./"], a[href^="/"], a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's an anchor link or external
            if (href.startsWith('#') || href.startsWith('http')) {
                return;
            }
            
            e.preventDefault();
            
            // Add exit animation
            document.body.classList.add('page-exit');
            
            // Navigate after animation
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        });
    });
}

// Initialize all animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add initial fade-in to body
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
        
        // Initialize all animation systems
        initializeScrollAnimations();
        initializeStaggeredAnimations();
        initializeHeroAnimations();
        initializeCardAnimations();
        initializeGalleryAnimations();
        initializeButtonAnimations();
        initializeNavbarAnimations();
        initializeTextAnimations();
        initializeLoadingAnimations();
        initializeParallaxEffect();
        animateCounters();
        initializeTypewriterEffect();
        initializeFloatingElements();
        initializePageTransitions();
        
    }, 100);
});

// Handle reduced motion preference
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Disable animations for users who prefer reduced motion
    const style = document.createElement('style');
    style.textContent = `
        *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    `;
    document.head.appendChild(style);
}

// Export functions for use in other scripts
window.AnimationController = {
    initializeScrollAnimations,
    initializeStaggeredAnimations,
    initializeHeroAnimations,
    initializeCardAnimations,
    initializeGalleryAnimations,
    initializeButtonAnimations,
    animateCounters
};