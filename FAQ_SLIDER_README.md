# FAQ Vertical Auto-Loop Slider Component

## Overview
The FAQ Slider is a React component that displays Frequently Asked Questions in a vertical auto-scrolling carousel format. It provides an engaging, modern alternative to traditional static FAQ sections.

## Features

### ✨ Core Functionality
- **Vertical Auto-Scroll**: Questions automatically scroll upward in a smooth loop
- **Seamless Looping**: No blank space between cycles - questions flow continuously
- **Hover/Touch Pause**: Scrolling pauses when users hover (desktop) or tap (mobile)
- **Expandable Answers**: Click any question to view its full answer
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### 🎨 Visual Design
- Clean, professional styling consistent with the site theme
- Smooth animations and transitions
- Gradient masking for elegant fade-in/out effects
- Hover effects with subtle scaling and border highlighting
- Modern card-based layout with shadows

### ♿ Accessibility Features
- Full keyboard navigation support
- ARIA labels and roles for screen readers
- High contrast mode support
- Reduced motion support for users with motion sensitivity
- Semantic HTML structure

## Usage

### Basic Implementation
```tsx
import FAQSlider from '@/components/ui/faq-slider';

const faqs = [
  {
    question: "What is your minimum order quantity?",
    answer: "Our minimum order quantities vary by product..."
  },
  // ... more FAQs
];

<FAQSlider faqs={faqs} />
```

### With Custom Styling
```tsx
<FAQSlider 
  faqs={faqs} 
  className="my-custom-class" 
/>
```

## Component Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `faqs` | `FAQ[]` | Yes | Array of FAQ objects with `question` and `answer` properties |
| `className` | `string` | No | Additional CSS classes to apply |

### FAQ Object Structure
```typescript
interface FAQ {
  question: string;  // The FAQ question text
  answer: string;    // The FAQ answer text
}
```

## Technical Details

### Performance Optimizations
- Uses `requestAnimationFrame` for smooth 60fps animation
- Efficient re-rendering with React hooks
- Optimized for different screen sizes (slower scroll on mobile)
- Memory-efficient cleanup of animation frames

### Responsive Breakpoints
- **Mobile (≤640px)**: Height: 300px, slower scroll speed, compact padding
- **Tablet (641-1024px)**: Height: 350px, medium scroll speed
- **Desktop (≥1024px)**: Height: 400px, full scroll speed

### Animation Behavior
- **Scroll Speed**: 0.5px per frame (desktop), 0.3px per frame (mobile)
- **Start Delay**: 1 second after component mount
- **Pause Behavior**: Immediate pause on hover/touch
- **Resume Delay**: 500ms delay after touch end (prevents accidental resume)

## Styling Classes

The component uses Tailwind CSS with custom classes defined in `src/index.css`:

### Main Container Classes
- `.faq-slider-wrapper` - Main wrapper with max-width constraints
- `.faq-slider-container` - Container with fixed height and gradient masking
- `.faq-slider-content` - Scrolling content container
- `.faq-slider-item` - Individual FAQ item with card styling

### Interactive Classes
- `.faq-question-button` - Clickable question button with focus states
- `.faq-answer` - Collapsible answer section with smooth transitions
- `.faq-scroll-indicator` - Status indicator showing scroll state

## Browser Support
- Modern browsers with CSS Grid and Flexbox support
- iOS Safari 12+
- Chrome 70+
- Firefox 65+
- Edge 79+

## Customization

### Adjusting Scroll Speed
Modify the `scrollSpeed` values in the component:
```typescript
const scrollSpeed = window.innerWidth <= 640 ? 0.3 : 0.5;
```

### Changing Container Height
Update the CSS in `src/index.css`:
```css
.faq-slider-container {
  height: 400px; /* Adjust this value */
}
```

### Custom Styling
Add your own CSS classes or modify the existing ones:
```css
.faq-slider-wrapper.custom-faq {
  /* Your custom styles */
}
```

## Implementation Notes

1. **FAQ Duplication**: The component automatically duplicates the FAQ array to create seamless looping
2. **Animation Cleanup**: Proper cleanup of animation frames prevents memory leaks
3. **Touch Handling**: Enhanced touch support with preventDefault for better mobile experience
4. **Error Handling**: Graceful handling of empty or undefined FAQ arrays

## Integration Example

The component is currently integrated into the Contacts page (`src/pages/Contacts.tsx`):

```tsx
{/* FAQ Section */}
<section className="section-padding bg-secondary">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-muted-foreground">
          Find answers to common questions about our products and services
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          <span className="inline-block px-3 py-1 bg-primary/10 rounded-full">
            🚀 Auto-scrolling carousel - hover to pause and explore!
          </span>
        </p>
      </div>
      
      <FAQSlider faqs={faqs} />
    </div>
  </div>
</section>
```

This creates an engaging, modern FAQ experience that encourages user interaction while maintaining excellent accessibility and performance.