import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSliderProps {
  faqs: FAQ[];
  className?: string;
}

export const FAQSlider: React.FC<FAQSliderProps> = ({ faqs, className = '' }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  // Duplicate FAQs for seamless looping
  const duplicatedFaqs = [...faqs, ...faqs];

  useEffect(() => {
    const container = containerRef.current;
    if (!container || isPaused || faqs.length === 0) return;

    let translateY = 0;
    const itemHeight = 120; // Approximate height of each FAQ item
    const totalHeight = faqs.length * itemHeight;
    const scrollSpeed = window.innerWidth <= 640 ? 0.3 : 0.5; // Slower on mobile

    const animate = () => {
      translateY -= scrollSpeed;
      
      // Reset position when we've scrolled through all original items
      if (Math.abs(translateY) >= totalHeight) {
        translateY = 0;
      }
      
      container.style.transform = `translateY(${translateY}px)`;
      
      if (!isPaused) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    // Add a small delay before starting animation
    const timeoutId = setTimeout(() => {
      animationRef.current = requestAnimationFrame(animate);
    }, 1000);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      clearTimeout(timeoutId);
    };
  }, [isPaused, faqs.length]);

  const handleMouseEnter = () => {
    setIsPaused(true);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    setIsPaused(true);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const handleTouchEnd = () => {
    // Add a small delay before resuming to prevent accidental resume
    setTimeout(() => {
      setIsPaused(false);
    }, 500);
  };

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Error boundary for faqs
  if (!faqs || faqs.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No FAQs available at the moment.</p>
      </div>
    );
  }

  return (
    <div className={`faq-slider-wrapper ${className}`}>
      <div 
        className="faq-slider-container"
        role="region"
        aria-label="Frequently Asked Questions Carousel"
        aria-live="polite"
      >
        <div
          ref={containerRef}
          className="faq-slider-content"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="list"
        >
          {duplicatedFaqs.map((faq, index) => {
            const originalIndex = index % faqs.length;
            const isExpanded = expandedIndex === originalIndex;
            
            return (
              <div
                key={`${originalIndex}-${Math.floor(index / faqs.length)}`}
                className={`faq-slider-item ${isExpanded ? 'expanded' : ''}`}
                role="listitem"
              >
                <button
                  onClick={() => toggleExpanded(originalIndex)}
                  className="faq-question-button"
                  aria-expanded={isExpanded}
                  aria-controls={`faq-answer-${originalIndex}`}
                >
                  <h4 className="faq-question-text">{faq.question}</h4>
                  {isExpanded ? (
                    <ChevronUp className="faq-chevron" />
                  ) : (
                    <ChevronDown className="faq-chevron" />
                  )}
                </button>
                
                <div
                  id={`faq-answer-${originalIndex}`}
                  className={`faq-answer ${isExpanded ? 'expanded' : ''}`}
                  aria-hidden={!isExpanded}
                >
                  <div className="faq-answer-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="faq-scroll-indicator">
        <div className="scroll-hint">
          {isPaused ? "Tap or hover to pause" : "Auto-scrolling..."}
        </div>
      </div>
    </div>
  );
};

export default FAQSlider;