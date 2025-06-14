import React from 'react';
import Image from 'next/image';

type MovieBackgroundProps = {
  src: string;
  alt: string;
};

const MovieBackground = ({ src, alt }: MovieBackgroundProps) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover opacity-30"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#b57edc] via-black/2 to-transparent" />
    </div>
  );
};

export default MovieBackground;
