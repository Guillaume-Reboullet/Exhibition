'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ExperienceCardProps {
  title: string;
  location: string;
  date: string;
  role: string;
  description: string;
  expandable?: boolean;
}

export default function ExperienceCard({
  title,
  location,
  date,
  role,
  description,
}: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={"flex flex-col gap-(--spacing-related) border border-dusk/20 rounded-lg p-(--spacing-related) group transition-all hover:shadow-lg cursor-pointer"}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex flex-col">
        <span className="medium-text text-prussian!">
          {title} <span className='hidden sm:inline'>,</span>&nbsp;<span className="small-text italic block sm:inline">{location} · {date}</span>
        </span>
        <span className="small-text text-lavender!">{role}</span>
      </div>

      {!isExpanded ? (
        <p className={`small-text font-serif transition-all ${isExpanded ? '' : 'line-clamp-2'}`}>
          {description}
        </p>
      ) : (
        <p className="small-text font-serif">{description}</p>
      )}

      <div className="flex w-full justify-center">
        <Image
          src="/ui/arrow_right.svg"
          alt="open/close button"
          width={36}
          height={36}
          className={`transition-transform ${isExpanded ? 'rotate-270' : 'rotate-90'}`}
        />
      </div>
    </div>
  );
}