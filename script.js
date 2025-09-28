// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    mobileMenu.classList.toggle('active');
    menuBtn.classList.toggle('active');
}

// Smooth Scrolling for Anchor Links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
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

    // Add scroll effect to header
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        // Add/remove shadow based on scroll position
        if (scrollTop > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe all sections and cards
    document.querySelectorAll('.section, .product-card, .testimonial-card').forEach(el => {
        observer.observe(el);
    });
});

// Form Submission Handler (for contact forms)
function handleFormSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const formObject = {};
    
    formData.forEach((value, key) => {
        formObject[key] = value;
    });
    
    // Validate required fields
    if (!formObject.name || !formObject.email || !formObject.subject || !formObject.message) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }
    
    // Create email content
    const subject = encodeURIComponent(`Website Contact: ${formObject.subject}`);
    const body = encodeURIComponent(
        `New contact form submission from website:\n\n` +
        `Name: ${formObject.name}\n` +
        `Email: ${formObject.email}\n` +
        `Phone: ${formObject.phone || 'Not provided'}\n` +
        `Subject: ${formObject.subject}\n\n` +
        `Message:\n${formObject.message}\n\n` +
        `---\n` +
        `Sent from Krypt Investments website contact form`
    );
    
    // Try multiple approaches
    try {
        // Method 1: Try mailto link
        const mailtoLink = `mailto:kryptinvestmentsltd@gmail.com?subject=${subject}&body=${body}`;
        
        // Create a temporary link and click it
        const link = document.createElement('a');
        link.href = mailtoLink;
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Show success message with alternatives
        showNotification(
            'Email client should open now. If it doesn\'t work, please copy the message and email us directly at kryptinvestmentsltd@gmail.com or use WhatsApp.',
            'success'
        );
        
        // Also provide WhatsApp alternative
        setTimeout(() => {
            const whatsappMessage = `Hi! I filled out your contact form:\n\n` +
                `Name: ${formObject.name}\n` +
                `Email: ${formObject.email}\n` +
                `Phone: ${formObject.phone || 'Not provided'}\n` +
                `Subject: ${formObject.subject}\n\n` +
                `Message: ${formObject.message}`;
            
            const whatsappConfirm = confirm(
                'Would you like to send this message via WhatsApp instead? This usually works better on mobile devices.'
            );
            
            if (whatsappConfirm) {
                openWhatsApp(whatsappMessage);
            }
        }, 2000);
        
    } catch (error) {
        console.error('Email submission failed:', error);
        
        // Show fallback with message content
        const messageContent = `Please copy this message and send it to kryptinvestmentsltd@gmail.com:\n\n` +
            `Subject: Website Contact: ${formObject.subject}\n\n` +
            `Name: ${formObject.name}\n` +
            `Email: ${formObject.email}\n` +
            `Phone: ${formObject.phone || 'Not provided'}\n` +
            `Subject: ${formObject.subject}\n\n` +
            `Message: ${formObject.message}`;
            
        alert(messageContent);
        showNotification('Email client failed to open. Please copy the message from the popup or use WhatsApp.', 'error');
    }
    
    // Reset form
    event.target.reset();
}

// Notification System
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${type === 'success' ? '✓' : type === 'error' ? '✗' : 'ℹ'}</span>
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="closeNotification(this)">&times;</button>
        </div>
    `;
    
    // Add styles if not already added
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 10000;
                max-width: 400px;
                background: white;
                border-radius: 8px;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
                border-left: 4px solid #3b82f6;
                animation: slideInRight 0.3s ease-out;
            }
            
            .notification-success {
                border-left-color: #10b981;
            }
            
            .notification-error {
                border-left-color: #ef4444;
            }
            
            .notification-content {
                padding: 16px;
                display: flex;
                align-items: center;
                gap: 12px;
            }
            
            .notification-icon {
                font-size: 18px;
                color: #10b981;
                font-weight: bold;
            }
            
            .notification-error .notification-icon {
                color: #ef4444;
            }
            
            .notification-message {
                flex: 1;
                color: #1e293b;
                font-size: 14px;
            }
            
            .notification-close {
                background: none;
                border: none;
                font-size: 20px;
                color: #64748b;
                cursor: pointer;
                padding: 0;
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .notification-close:hover {
                color: #1e293b;
            }
            
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(styles);
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            closeNotification(notification.querySelector('.notification-close'));
        }
    }, 5000);
}

function closeNotification(button) {
    const notification = button.closest('.notification');
    notification.style.animation = 'slideInRight 0.3s ease-out reverse';
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// FAQ Toggle (for contact page)
function toggleFAQ(element) {
    const faqItem = element.closest('.faq-item');
    const answer = faqItem.querySelector('.faq-answer');
    const icon = element.querySelector('.faq-icon');
    
    faqItem.classList.toggle('active');
    
    if (faqItem.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        icon.style.transform = 'rotate(180deg)';
    } else {
        answer.style.maxHeight = '0';
        icon.style.transform = 'rotate(0deg)';
    }
}

// WhatsApp Integration
function openWhatsApp(message = '') {
    const phoneNumber = '256772316316'; // Krypt Investments WhatsApp number
    const encodedMessage = encodeURIComponent(message || 'Hi, I\'m interested in your cleaning products. Can you help me?');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

// Product Filter (for products page)
function filterProducts(category) {
    const products = document.querySelectorAll('.product-card');
    const buttons = document.querySelectorAll('.filter-btn');
    
    // Update active button
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Filter products
    products.forEach(product => {
        const productCategory = product.getAttribute('data-category');
        
        if (category === 'all' || productCategory === category) {
            product.style.display = 'block';
            product.classList.add('fade-in');
        } else {
            product.style.display = 'none';
        }
    });
}

// Initialize page-specific functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the home page and add scroll animations
    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
        // Add staggered animation to product cards
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
        });
        
        // Add staggered animation to testimonials
        const testimonialCards = document.querySelectorAll('.testimonial-card');
        testimonialCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.2}s`;
        });
    }
    
    // Update active navigation link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage || 
            (currentPage === '' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        }
    });
});