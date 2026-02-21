import React, { useState, useEffect } from 'react';

interface HeroCarouselProps {
  images: string[];
  interval?: number;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ images, interval = 6000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  if (images.length === 0) return null;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-gray-900">
      {/* Overlay Gradient - Permanent on top of images */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-black/30 z-10 pointer-events-none" />
      
      {/* Texture Overlay - Subtle pattern */}
      <div className="absolute inset-0 z-10 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none mix-blend-overlay"></div>

      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-[1500ms] ease-in-out ${
            index === currentIndex ? 'opacity-100 z-0' : 'opacity-0 z-0'
          }`}
        >
          <div
            className={`w-full h-full bg-cover bg-center transition-transform duration-[8000ms] ease-out ${
              index === currentIndex ? 'scale-110' : 'scale-100'
            }`}
            style={{ backgroundImage: `url('${image}')` }}
          />
        </div>
      ))}
      
      {/* Carousel Indicators - Optional but nice for "premium" feel */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
