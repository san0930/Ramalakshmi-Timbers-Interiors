/* ============================================
   RAMALAKSHMI WOODWORKS - CLEAN JAVASCRIPT
   Simple, Lightweight Functionality
   ============================================ */

// ============== FORM HANDLING ==============
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            email: document.getElementById('email').value.trim(),
            message: document.getElementById('message').value.trim()
        };

        // Validate form
        if (!formData.name || !formData.phone || !formData.email || !formData.message) {
            showMessage('Please fill all fields', 'error');
            return;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            showMessage('Please enter a valid email', 'error');
            return;
        }

        if (formData.phone.length < 10){
            showMessage("Please enter full number");
            return;
        } 

        

        // Log form data (replace with actual API call if needed)
        console.log('Form submitted:', formData);

        // Show success message
        showMessage('Thank you! We will contact you shortly.', 'success');

        // Reset form
        contactForm.reset();
    });
}

// ============== SHOW MESSAGE ==============
function showMessage(text, type) {
    const message = document.createElement('div');
    const bgColor = type === 'success' ? '#25D366' : '#E74C3C';
    const textColor = type === 'success' ? '#FFFFFF' : '#FFFFFF';
    
    message.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px 24px;
        background-color: ${bgColor};
        color: ${textColor};
        border: none;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 500;
        z-index: 9999;
        animation: slideIn 0.4s ease;
        max-width: 90%;
    `;
    
    message.textContent = text;
    document.body.appendChild(message);

    setTimeout(() => {
        message.style.animation = 'slideOut 0.4s ease';
        setTimeout(() => message.remove(), 400);
    }, 4000);
}

// ============== SMOOTH SCROLL ==============
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

// ============== DESIGN MODAL FUNCTIONALITY ==============
const designModal = document.getElementById('designModal');
const designModalClose = document.querySelector('.design-modal-close');
const designGallery = document.getElementById('designGallery');
const designModalTitle = document.getElementById('designModalTitle');
const viewDesignButtons = document.querySelectorAll('.btn-view-designs');

// Design images mapping - organized by category
const designImages = {
    'custom furniture': [
        'images/Designs/custom%20furniture/001.jpg',
        'images/Designs/custom%20furniture/002.jpg',
        'images/Designs/custom%20furniture/003.jpg'
    ],
    'wardrobe': [
        'images/Designs/wardrobe/a.png',
        'images/Designs/wardrobe/b.jpg'
    ],
    'Doors': [
        'images/Designs/Doors/01.jpg',
        'images/Designs/Doors/02.jpg',
        'images/Designs/Doors/03.jpg',
        'images/Designs/Doors/04.jpg',
        'images/Designs/Doors/05.jpg'
    ],
    'cots-sofa': [
        'images/Designs/cots/11.jpg',
        'images/Designs/cots/22.jpg',
        'images/Designs/sofa/8.jpg',
        'images/Designs/sofa/9.jpg'
    ],
    'cuboard': [
        'images/Designs/cuboard/1.jpg',
        'images/Designs/cuboard/2.jpg',
        'images/Designs/cuboard/3.jpg'
    ],
    'interior': [
        'images/Designs/interior/10.jpg',
        'images/Designs/interior/20.jpg',
        'images/Designs/interior/30.jpg'
    ]
};

// Open design modal
viewDesignButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        openDesignModal(category);
    });
});

// Close modal
designModalClose.addEventListener('click', closeDesignModal);
designModal.addEventListener('click', (e) => {
    if (e.target === designModal) {
        closeDesignModal();
    }
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && designModal.classList.contains('active')) {
        closeDesignModal();
    }
});

function openDesignModal(category) {
    // Update title
    const categoryNames = {
        'custom furniture': 'Custom Furniture Designs',
        'wardrobe': 'Wardrobe & Cabinet Designs',
        'Doors': 'Wooden Door Designs',
        'cots-sofa': 'Sofa & Cot Designs',
        'cuboard': 'Cupboard & Shelving Designs',
        'interior': 'Interior Solutions'
    };

    designModalTitle.textContent = categoryNames[category] || 'Design Gallery';

    // Load images
    const images = designImages[category] || [];
    designGallery.innerHTML = '';

    if (images.length === 0) {
        designGallery.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: #666;">No designs available for this category.</p>';
    } else {
        images.forEach(imagePath => {
            const imageItem = document.createElement('div');
            imageItem.className = 'design-image-item';
            imageItem.innerHTML = `<img src="${imagePath}" alt="Design" onerror="this.src='images/placeholder.jpg'">`;
            designGallery.appendChild(imageItem);
        });
    }

    // Show modal
    designModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeDesignModal() {
    designModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ============== UTILITY: Print active section ==============
console.log('✓ Ramalakshmi Timbers & Interiors — Production-Ready');
