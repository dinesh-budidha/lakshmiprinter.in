// Lakshmi Printers - Main JavaScript File

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeMobileMenu();
    initializeLightbox();
    initializeScrollEffects();
    initializeForms();
});

// Scroll-triggered animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Mobile menu functionality
function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when clicking on a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
}

// Lightbox functionality
function initializeLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const closeLightbox = document.getElementById('close-lightbox');

    // Close lightbox when clicking outside image
    lightbox?.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.add('hidden');
        }
    });

    // Close lightbox button
    closeLightbox?.addEventListener('click', () => {
        lightbox?.classList.add('hidden');
    });

    // Close lightbox with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !lightbox?.classList.contains('hidden')) {
            lightbox?.classList.add('hidden');
        }
    });
}

// Open lightbox function
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    
    if (lightbox && lightboxImage) {
        lightboxImage.src = imageSrc;
        lightbox.classList.remove('hidden');
    }
}

// Scroll effects and smooth scrolling
function initializeScrollEffects() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Header background on scroll
    const header = document.querySelector('.sticky-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.backgroundColor = 'rgba(122, 31, 47, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.backgroundColor = 'var(--primary-maroon)';
                header.style.backdropFilter = 'none';
            }
        });
    }
}

// Form handling and validation
function initializeForms() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            if (validateForm(form)) {
                // Show success message
                showNotification('Thank you! Your message has been sent successfully.', 'success');
                form.reset();
            }
        });
    });

    // Real-time validation
    document.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
    });
}

// Form validation
function validateForm(form) {
    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    return isValid;
}

// Individual field validation
function validateField(field) {
    const value = field.value.trim();
    const type = field.type;
    let isValid = true;
    
    // Remove existing error styling
    field.classList.remove('border-red-500');
    
    // Required field check
    if (field.hasAttribute('required') && !value) {
        isValid = false;
    }
    
    // Email validation
    if (type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
        }
    }
    
    // Phone validation
    if (type === 'tel' && value) {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (!phoneRegex.test(value.replace(/\s/g, ''))) {
            isValid = false;
        }
    }
    
    // Apply error styling
    if (!isValid) {
        field.classList.add('border-red-500');
    }
    
    return isValid;
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    document.querySelectorAll('.notification').forEach(n => n.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification fixed top-4 right-4 z-50 px-6 py-4 rounded-lg shadow-lg text-white max-w-sm ${
        type === 'success' ? 'bg-green-500' : 
        type === 'error' ? 'bg-red-500' : 
        'bg-blue-500'
    }`;
    
    notification.innerHTML = `
        <div class="flex items-center justify-between">
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" class="ml-4 text-white hover:text-gray-200">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Download functionality
function downloadFile(filename) {
    // Simulate download process
    showNotification('Download started...', 'info');
    
    // In a real implementation, this would trigger an actual file download
    setTimeout(() => {
        showNotification(`${filename} downloaded successfully!`, 'success');
    }, 1500);
}

// Map and directions functionality
function openGoogleMaps() {
    const address = "12-93, Medchal Check-Post, Kistapur Road, Near NH-44, Medchal, Telangana 501401";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://maps.google.com/?q=${encodedAddress}`, '_blank');
}

function getDirections() {
    const address = "12-93, Medchal Check-Post, Kistapur Road, Near NH-44, Medchal, Telangana 501401";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://maps.google.com/dir/?api=1&destination=${encodedAddress}`, '_blank');
}

// Service card interactions
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add subtle click feedback
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
});

// Button hover effects
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-gold');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Lazy loading for images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading when DOM is ready
document.addEventListener('DOMContentLoaded', initializeLazyLoading);

// WhatsApp integration
function openWhatsApp() {
    const phone = "919999999999"; // Replace with actual WhatsApp number
    const message = encodeURIComponent("Hi, I'm interested in your printing services.");
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
}

// Call functionality
function makeCall() {
    window.location.href = 'tel:+919999999999';
}

// Email functionality
function sendEmail() {
    window.location.href = 'mailto:info@lakshmiprinters.com?subject=Inquiry about Printing Services';
}

// Print functionality
function printPage() {
    window.print();
}

// Social media sharing
function shareOnSocial(platform) {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    
    const shareUrls = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
        whatsapp: `https://wa.me/?text=${title}%20${url}`
    };
    
    if (shareUrls[platform]) {
        window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Performance optimization
window.addEventListener('load', function() {
    // Preload critical resources
    const criticalImages = [
        'resources/logo.png',
        'resources/hero-bg.jpg'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
});

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // In production, you might want to send this to an error tracking service
});

// Accessibility improvements
document.addEventListener('keydown', function(e) {
    // Skip to main content with Tab key
    if (e.key === 'Tab' && e.shiftKey === false) {
        const focusedElement = document.activeElement;
        if (focusedElement && focusedElement.classList.contains('skip-link')) {
            e.preventDefault();
            const mainContent = document.querySelector('main, .main-content, #main-content');
            if (mainContent) {
                mainContent.focus();
            }
        }
    }
});

// Initialize everything when the page is fully loaded
window.addEventListener('load', function() {
    // Remove loading class from body
    document.body.classList.remove('loading');
    
    // Initialize any additional features
    console.log('Lakshmi Printers website loaded successfully!');
});