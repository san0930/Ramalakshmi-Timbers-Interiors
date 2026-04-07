/* ============================================
   RAMALAKSHMI TIMBERS & INTERIORS
   Production-Ready JavaScript
   ============================================ */

// ============== DOM ELEMENTS ==============
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxClose = document.querySelector('.lightbox-close');
const galleryItems = document.querySelectorAll('.gallery-item');
const contactForm = document.getElementById('contactForm');

// Gallery titles and image paths for lightbox
const galleryData = [
    { title: 'Modern Minimalist Study', image: 'images/our work/our work 1.png' },
    { title: 'Heritage Door Installation', image: 'images/our work/our work 2.png' },
    { title: 'Sculptural Wall Panel', image: 'images/our work/our work 3.png' },
    { title: 'Custom Dining Suite', image: 'images/our work/our work 4.png' },
    { title: 'Library Architecture', image: 'images/our work/our work 5.png' },
    { title: 'Sliding Door System', image: 'images/our work/our work 6.png' }
];

// ============== INTERSECTION OBSERVER ==============
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Add stagger effect based on position
            const delay = index * 100;
            setTimeout(() => {
                entry.target.classList.add('fade-in');
                entry.target.style.animationDelay = `${delay}ms`;
            }, 0);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
document.addEventListener('DOMContentLoaded', () => {
    // Observe service cards
    document.querySelectorAll('.service-card').forEach((el, idx) => {
        el.style.animationDelay = `${idx * 100}ms`;
        observer.observe(el);
    });

    // Observe gallery items
    document.querySelectorAll('.gallery-item').forEach((el, idx) => {
        el.style.animationDelay = `${idx * 100}ms`;
        observer.observe(el);
    });

    // Observe hero left content
    const heroLeft = document.querySelector('.hero-left');
    if (heroLeft) {
        heroLeft.classList.add('fade-in');
    }
});

// ============== LIGHTBOX FUNCTIONALITY ==============
galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
        const index = item.getAttribute('data-index');
        const imageData = galleryData[index];
        
        lightboxImage.src = imageData.image;
        lightboxImage.alt = imageData.title;
        lightboxTitle.textContent = imageData.title;
        
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

lightboxClose.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close lightbox on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
    }
});

// ============== FORM HANDLING ==============
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            project: document.getElementById('project').value,
            message: document.getElementById('message').value
        };

        // Log form data (replace with actual submission logic)
        console.log('Form submitted:', formData);

        // Show success message
        showFormSuccess();

        // Reset form
        contactForm.reset();
    });
}

function showFormSuccess() {
    const successMsg = document.createElement('div');
    successMsg.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px 24px;
        background-color: #0F0F09;
        color: #F2F2F2;
        border: 1px solid #C4CEB8;
        font-size: 14px;
        z-index: 999;
        animation: slideIn 0.4s ease;
    `;
    successMsg.textContent = 'Thank you for your inquiry. We will contact you shortly.';
    document.body.appendChild(successMsg);

    setTimeout(() => {
        successMsg.style.animation = 'slideOut 0.4s ease';
        setTimeout(() => successMsg.remove(), 400);
    }, 3500);
}

// ============== ANIMATIONS ==============
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`;
document.head.appendChild(style);

// ============== SMOOTH SCROLL ENHANCEMENT ==============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============== SCREEN DETECTION FOR NAVIGATION ==============
function handleMobileNav() {
    const nav = document.querySelector('.nav');
    const header = document.querySelector('.header');
    
    if (window.innerWidth <= 640) {
        if (!nav) return;
        nav.style.display = 'none';
    } else {
        if (!nav) return;
        nav.style.display = 'flex';
    }
}

window.addEventListener('resize', handleMobileNav);
document.addEventListener('DOMContentLoaded', handleMobileNav);

// ============== LAZY IMAGE LOADING (OPTIONAL) ==============
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============== ACTIVE LINK HIGHLIGHTING ==============
window.addEventListener('scroll', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = '#0F0F09';
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = '#C4CEB8';
        }
    });
});

// ============== UTILITY: Print active section ==============
console.log('✓ Ramalakshmi Timbers & Interiors — Production-Ready');
