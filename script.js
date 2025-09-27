// Modern Layout JavaScript for SnowandIce
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initializeNavigation();
    initializeTestimonialCarousel();
    initializeContactForm();
    initializeScrollAnimations();
    initializeFloatingNav();
    initializeInteractiveElements();
});

// Navigation functionality
function initializeNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    // Smooth scrolling for navigation links
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Update active nav item
                updateActiveNavItem(this);
            }
        });
    });
    
    // Mobile menu toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
}

// Update active navigation item
function updateActiveNavItem(activeItem) {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    activeItem.classList.add('active');
}

// Testimonial carousel functionality
function initializeTestimonialCarousel() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    
    if (testimonialCards.length === 0) return;
    
    let currentSlide = 0;
    
    function showSlide(index) {
        testimonialCards.forEach((card, i) => {
            card.classList.toggle('active', i === index);
        });
        
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        
        currentSlide = index;
    }
    
    function nextSlide() {
        const next = (currentSlide + 1) % testimonialCards.length;
        showSlide(next);
    }
    
    function prevSlide() {
        const prev = (currentSlide - 1 + testimonialCards.length) % testimonialCards.length;
        showSlide(prev);
    }
    
    // Event listeners
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });
    
    // Auto-play carousel
    setInterval(nextSlide, 5000);
}

// Contact form handling
function initializeContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const firstName = this.querySelector('input[placeholder="John"]')?.value;
            const lastName = this.querySelector('input[placeholder="Doe"]')?.value;
            const email = this.querySelector('input[type="email"]')?.value;
            const phone = this.querySelector('input[type="tel"]')?.value;
            const subject = this.querySelector('select')?.value;
            const message = this.querySelector('textarea')?.value;
            
            // Basic validation
            if (!firstName || !lastName || !email || !phone || !subject || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Show success message
            showNotification('Thank you for your message! We will get back to you soon.', 'success');
            
            // Reset form
            this.reset();
        });
    }
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '15px 25px',
        borderRadius: '10px',
        color: 'white',
        fontSize: '14px',
        fontWeight: '500',
        zIndex: '10000',
        transform: 'translateX(400px)',
        transition: 'transform 0.3s ease',
        backgroundColor: type === 'success' ? '#4CAF50' : type === 'error' ? '#F44336' : '#2196F3'
    });
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll(
        '.product-card, .testimonial-card, .story-card, .contact-card, .feature-item, .gallery-item'
    );
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Floating navigation effects
function initializeFloatingNav() {
    const floatingNav = document.querySelector('.floating-nav');
    const navContainer = document.querySelector('.nav-container');
    
    if (!floatingNav || !navContainer) return;
    
    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        
        if (scrollY > 100) {
            // Enhanced glass effect when scrolled
            navContainer.style.background = `linear-gradient(135deg, 
                rgba(255, 255, 255, 0.35) 0%,
                rgba(240, 248, 255, 0.45) 25%,
                rgba(230, 243, 255, 0.55) 50%,
                rgba(184, 230, 255, 0.45) 75%,
                rgba(255, 255, 255, 0.35) 100%
            )`;
            navContainer.style.backdropFilter = 'blur(25px)';
            navContainer.style.boxShadow = '0 12px 40px rgba(70, 130, 180, 0.4)';
            floatingNav.style.top = '10px';
        } else {
            // Original glass effect
            navContainer.style.background = `linear-gradient(135deg, 
                rgba(255, 255, 255, 0.25) 0%,
                rgba(240, 248, 255, 0.35) 25%,
                rgba(230, 243, 255, 0.45) 50%,
                rgba(184, 230, 255, 0.35) 75%,
                rgba(255, 255, 255, 0.25) 100%
            )`;
            navContainer.style.backdropFilter = 'blur(20px)';
            navContainer.style.boxShadow = '0 8px 32px rgba(70, 130, 180, 0.3)';
            floatingNav.style.top = '20px';
        }
    });
}

// Interactive elements
function initializeInteractiveElements() {
    // Video placeholder click handler
    const videoPlaceholder = document.querySelector('.video-placeholder');
    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('click', function() {
            showNotification('Video player would open here', 'info');
        });
    }
    
    // Product quick view buttons
    const quickViewBtns = document.querySelectorAll('.quick-view');
    quickViewBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            showNotification('Product details would open here', 'info');
        });
    });
    
    // CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-primary, .cta-secondary');
    ctaButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.textContent.trim();
            if (action.includes('Explore')) {
                document.querySelector('#products')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else if (action.includes('Demo') || action.includes('Watch')) {
                showNotification('Demo video would play here', 'info');
            } else if (action.includes('Quote')) {
                document.querySelector('#contact')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Form input focus effects
    const formInputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'translateY(-2px)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'translateY(0)';
        });
    });
    
    // Parallax effect for hero background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero-background');
        if (parallax) {
            const speed = scrolled * 0.5;
            parallax.style.transform = `translateY(${speed}px)`;
        }
    });
}

// Update navigation on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-item');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// Loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease';
});

// Set initial body opacity for loading effect
document.body.style.opacity = '0';