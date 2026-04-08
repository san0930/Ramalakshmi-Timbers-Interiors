# Ramalakshmi Timbers & Interiors

## Production-Ready Website

A pixel-perfect, luxury architectural portfolio website for a premium woodworking and timber interiors brand.

---

## 📁 Files Included

- **index.html** — Complete semantic HTML structure with all page sections
- **styles.css** — Production-ready CSS with design system variables and responsive breakpoints
- **script.js** — JavaScript for interactivity (Intersection Observer, lightbox, form handling, smooth scroll)
- **README.md** — This file

---

## 🎨 Design System

### Color Palette
- **Background**: #F2F2F2
- **Primary Text**: #0F0F09
- **Accent/CTA**: #C4CEB8
- **Borders**: #D1D5DB

### Typography
- **Headings**: Playfair Display (serif) — Letter spacing: -0.02em
- **Body**: Inter (sans-serif)
- **Buttons**: Uppercase, letter-spacing: 0.05em

### Design Rules
✓ NO drop shadows
✓ NO gradients
✓ NO rounded corners
✓ ONLY 1px borders
✓ EXTREME whitespace (80px+ sections)
✓ Editorial/Architectural aesthetic

---

## 📐 Sections Overview

### 1. **HEADER** (Fixed, Transparent)
- Logo (text-based)
- Navigation links
- Inquire button (border-only style)

### 2. **HERO SECTION** (Split Layout)
- Left: Headline, subtext, inquiry bar
- Right: Full-height architectural image

### 3. **SERVICES** (Grid Layout)
- 4-column grid (3-column on tablet, 1-column on mobile)
- Border-separated cards
- Hover effect: subtle background shift

### 4. **GALLERY** (Flush Grid)
- 3-column grid (2-column on tablet, 1-column on mobile)
- Hover overlay with project title
- Click to open lightbox modal

### 5. **CONTACT** (2-Column Layout)
- Left: Form fields (bottom-border only)
- Right: Contact info + WhatsApp button

### 6. **FOOTER**
- Copyright information

---

## 🖼️ IMAGE Setup Instructions

### Required Images

Replace placeholder text in the HTML with actual images:

1. **Hero Section Image**
   - Location: `.hero-image`
   - Recommended size: 1200×800px
   - Format: JPG/WebP (optimized)
   - Description: Modern architectural/interior photography

2. **Gallery Images** (6 total)
   - Location: `.gallery-image` elements
   - Recommended size: 600×600px
   - Format: JPG/WebP (optimized)
   - Naming: `project-0.jpg` through `project-5.jpg`

### Image Placement Steps

1. Place all images in the same directory as `index.html`
2. In `index.html`, replace placeholder divs:
   ```html
   <!-- Before -->
   <div class="hero-image" style="background: linear-gradient(...);">
       [HERO IMAGE - 1200×800px recommended]
   </div>

   <!-- After -->
   <img class="hero-image" src="hero-image.jpg" alt="Bespoke Timber Architecture">
   ```

3. Update gallery image references in `script.js`:
   ```javascript
   lightboxImage.src = `project-${index}.jpg`;
   ```

---

## 🚀 Deployment

### Static Hosting (Recommended)
The website can be deployed to:
- **Vercel** (free, optimized for web)
- **Netlify** (free, built-in optimizations)
- **GitHub Pages** (free, simple)
- **AWS S3 + CloudFront** (scalable, CDN)

### Steps
1. Push files to GitHub repository
2. Connect to Netlify/Vercel
3. Deploy automatically on push

### Self-Hosting
1. Upload HTML, CSS, JS, and images to server
2. Configure HTTPS (required)
3. Set up CDN for image optimization (optional)

---

## 📱 Responsive Breakpoints

### Desktop
- Full layout: 1400px max-width
- Hero: Two-column split
- Services: 4-column grid
- Gallery: 3-column grid
- Contact: 2-column layout

### Tablet (1024px and below)
- Hero: Single column
- Services: 2-column grid
- Gallery: 2-column grid
- Contact: Single column

### Mobile (640px and below)
- Navigation: Hidden (use hamburger menu if needed)
- Hero: Single column, smaller image
- Services: Single column
- Gallery: Single column
- Contact: Single column
- Spacing: Adjusted for readability

---

## ⚙️ Customization

### Update Company Information
- **Logo/Brand Name**: Edit `.logo` in HTML
- **Navigation Links**: Update nav hrefs
- **Contact Details**: Modify `.contact-info` section
- **WhatsApp Link**: Update href with actual phone number (format: `https://wa.me/91XXXXXXXXXX`)

### Color Customization
Edit CSS variables in `styles.css`:
```css
:root {
    --bg-light: #F2F2F2;
    --text-dark: #0F0F09;
    --accent: #C4CEB8;
    --border: #D1D5DB;
}
```

### Typography Customization
Update font family references in CSS:
```css
--font-serif: 'Garamond', serif;  /* Change serif font */
--font-sans: 'Helvetica', sans-serif;  /* Change sans-serif font */
```

---

## 🔧 JavaScript Features

### 1. **Intersection Observer**
- Fade-in + upward motion animation
- Triggers on 15% viewport visibility
- Staggered timing for multiple elements

### 2. **Lightbox Modal**
- Click gallery item to open modal
- Escape key to close
- Click outside to close
- Smooth transitions

### 3. **Form Handling**
- Required field validation (HTML5)
- Success message on submit
- Prevents default submission (add backend logic)

### 4. **Smooth Scroll**
- Native CSS `scroll-behavior: smooth`
- Enhanced navigation with scroll offset
- Active link highlighting on scroll

### 5. **Mobile Navigation**
- Automatically hides on small screens
- Responsive to window resize

---

## 🔐 Form Submission (Backend Integration)

Currently, the form logs data to console. To enable actual submission:

### Option 1: Email Service (Recommended)
```javascript
// In script.js, update form submission:
fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' }
})
.then(response => response.json())
.then(data => showFormSuccess());
```

### Option 2: Custom Backend
```javascript
fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' }
})
.then(response => response.json())
.then(data => showFormSuccess());
```

---

## 📊 Performance Optimization

### Implemented
✓ Semantic HTML (faster parsing)
✓ Minimal CSS (no unnecessary styles)
✓ No heavy libraries
✓ Efficient JavaScript (event delegation)
✓ Intersection Observer (lazy animation)

### Recommended Additional Steps
- Use WebP images with JPG fallback
- Compress images (TinyPNG, ImageOptim)
- Minify CSS/JS in production
- Enable GZIP compression on server
- Set up CDN for images
- Add Service Worker for offline capability

---

## ♿ Accessibility

✓ Semantic HTML5 elements
✓ Proper heading hierarchy
✓ Alt text for images
✓ ARIA labels where needed
✓ Keyboard navigation support
✓ Respects `prefers-reduced-motion`

---

## 🧪 Testing Checklist

- [ ] Test on Chrome, Firefox, Safari, Edge
- [ ] Test on iOS Safari and Chrome Mobile
- [ ] Verify all links work correctly
- [ ] Test form submission
- [ ] Test lightbox functionality
- [ ] Check responsive design at all breakpoints
- [ ] Verify images load correctly
- [ ] Check performance (Lighthouse score)
- [ ] Test accessibility (WAVE, Axe)

---

## 📝 License & Credits

This is a custom-built website using:
- **Fonts**: Google Fonts (Playfair Display, Inter)
- **CSS**: Vanilla CSS (no framework)
- **JavaScript**: Vanilla JavaScript (no libraries)
- **Icons**: None required (text-based design)

---

## 📞 Support Notes

- Colors and spacing follow luxury design standards
- No drop shadows or gradients per specification
- All hover states are subtle and refined
- Mobile-first responsive approach
- Production-ready code with proper comments

---

**Website Built**: 2026
**Status**: Production-Ready ✓
