'use client';

import { ReactNode, useRef } from "react";

type CarouselProps = {
  children: ReactNode;
  className?: string;
};

const Carousel = ({ children, className }: CarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className={`overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 ${className}`}
      style={{
        WebkitOverflowScrolling: 'touch', // iOS momentum scroll
        scrollbarWidth: 'none', // Firefox
      }}
    >
      <div
        className="flex gap-4"
        style={{
          scrollSnapType: 'x mandatory',
          paddingBottom: '1rem',
        }}
      >
        {Array.isArray(children)
          ? children.map((child, index) => (
              <div
                key={index}
                className="snap-start shrink-0 transition-transform duration-300 ease-in-out"
              >
                {child}
              </div>
            ))
          : children}
      </div>
    </div>
  );
};

export default Carousel;
