'use client';

import Image from 'next/image';
import "./style.css";

interface TechBannerProps {
  technologies: { src: string; alt: string }[];
}

export default function TechBanner({ technologies }: TechBannerProps) {
  const duplicatedTech = [...technologies, ...technologies];

  return (
    <div className="w-full overflow-hidden py-(--spacing-related)">
      <div className="flex animate-scroll gap-(--spacing-default)">
        {duplicatedTech.map((tech, index) => (
          <div
            key={index}
            className="shrink-0 w-12 h-12 sm:w-24 sm:h-24 relative transition-all"
          >
            <Image
              src={`/${tech.src}`}
              alt={tech.alt}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}