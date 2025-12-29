# Lakshmi Printers - Interaction Design

## User Interaction Flow

### 1. Navigation & Header Interactions
- **Sticky Header**: Always visible at top with maroon background
- **Logo Click**: Returns user to homepage from any page
- **Menu Navigation**: Smooth transitions between pages (Home, About, Services, Gallery, Downloads, Reviews, Contact)
- **Call Now Button**: Gold button that initiates phone call on mobile, shows number on desktop

### 2. Home Page Interactions
- **Hero Section CTA Buttons**:
  - "Get a Quote" button: Scrolls to contact form or opens modal with quote request form
  - "Call Now" button: Direct phone call functionality
- **Services Preview Grid**: Each service card is clickable, leads to detailed services page
- **Gallery Preview**: Click any image to view larger version in lightbox, with "View Full Gallery" button
- **Downloads Section**: Each PDF shows preview thumbnail, "Download PDF" button initiates download
- **Reviews Section**: Shows 3-5 review cards with star ratings, "Write a Review" button opens Google Reviews
- **Location Section**: Interactive Google Maps embed with "Open in Maps" functionality

### 3. About Page Interactions
- **Shop Photo**: Click to enlarge in lightbox
- **Equipment List**: Hover effects on equipment items showing specifications
- **Quality Assurance**: Interactive timeline or process steps

### 4. Services Page Interactions
- **Service Categories**: Filter buttons to show specific service types
- **Service Cards**: Each card shows detailed description, pricing info, and "Order Now" button
- **Image Galleries**: Each service can have multiple images in carousel

### 5. Gallery Page Interactions
- **Category Filters**: Buttons to filter by (Printing Work, Gift Items, Custom Merchandise, Shop Images)
- **Image Grid**: Masonry layout with hover effects showing maroon overlay
- **Lightbox**: Click any image to open full-size viewer with navigation
- **Zoom Effect**: Hover reveals zoom icon and maroon overlay

### 6. Downloads Page Interactions
- **PDF Previews**: Thumbnail images of documents
- **Download Tracking**: Visual feedback when download starts
- **Category Organization**: Grouped by document type (Brochures, Templates, Catalogues)
- **Search Function**: Filter downloads by name or category

### 7. Reviews Page Interactions
- **Review Slider**: Auto-advancing carousel with manual navigation
- **Star Ratings**: Interactive star display
- **Google Integration**: Live feed of Google Reviews if API available
- **Review Form**: Modal or inline form for customers to submit reviews

### 8. Contact Page Interactions
- **Contact Form**: 
  - Name, email, phone, service type dropdown, message
  - Form validation with real-time feedback
  - Success message after submission
- **WhatsApp Button**: Direct WhatsApp chat integration
- **Map Interactions**: 
  - Zoom in/out functionality
  - "Get Directions" button opens Google Maps with destination
- **Working Hours**: Interactive display showing current status (Open/Closed)

### 9. Footer Interactions
- **Quick Links**: Same as main navigation
- **Social Media Icons**: Click to open social profiles
- **Contact Info**: Phone and email are clickable
- **Scroll to Top**: Smooth scroll back to top of page

### 10. General Interactive Features
- **Scroll Animations**: Elements fade in as user scrolls down
- **Hover Effects**: 
  - Buttons: Color transitions and subtle lift effect
  - Cards: Soft shadow increase and slight scale
  - Images: Maroon overlay with zoom icon
- **Loading States**: Smooth transitions between pages
- **Mobile Responsive**: Touch-friendly interactions on all devices
- **Form Validation**: Real-time feedback on all forms
- **Modal Windows**: For image galleries, forms, and detailed information

### 11. Accessibility Features
- **Keyboard Navigation**: All interactive elements accessible via keyboard
- **Screen Reader Support**: Proper ARIA labels and descriptions
- **High Contrast**: Maintains 4.5:1 contrast ratio for all text
- **Focus Indicators**: Clear visual focus states for all interactive elements

## Technical Implementation Notes
- Use vanilla JavaScript for all interactions (no framework dependencies)
- Implement lazy loading for images and heavy content
- Use CSS transforms for smooth animations
- Ensure all buttons provide visual feedback
- Implement proper error handling for form submissions
- Use local storage for user preferences (if needed)