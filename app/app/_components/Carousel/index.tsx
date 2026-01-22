'use client';

import { useState, useEffect } from 'react';

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="flex flex-col gap-(--spacing-related) border border-dusk/20 rounded-lg p-(--spacing-related) group transition-all hover:shadow-lg">
      <div className="relative w-full">
        <img 
          src={images[currentIndex]} 
          alt={`Slide ${currentIndex + 1}`} 
          className='w-full h-auto max-h-[50vh] object-contain'
        />
      </div>
      <div className="flex justify-center gap-(--spacing-micro)">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
              index === currentIndex ? 'bg-dusk' : 'bg-lavender'
            }`}
          />
        ))}
      </div>
    </div>
  );
}