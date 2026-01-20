'use client';

import { useState } from 'react';

interface ProjectNavProps {
  items: { label: string; targetId: string }[];
}

export default function NavigationProjectsTypes({ items }: ProjectNavProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number, targetId: string) => {
    setActiveIndex(index);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex bg-lavender rounded-full p-1 fixed bottom-6">
      {items.map((item, index) => (
        <button
          key={item.targetId}
          onClick={() => handleClick(index, item.targetId)}
          className={`text-alabaster px-4 py-1 rounded-full transition-colors ${
            index === activeIndex ? 'bg-dusk' : ''
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}