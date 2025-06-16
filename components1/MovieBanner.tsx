'use client';

import Image from 'next/image';
import React from 'react';

type MovieBannerProps = {
  title: string;
  thumbnailUrl: string;
};

const MovieBanner = ({ title, thumbnailUrl }: MovieBannerProps) => {
  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl mx-auto max-w-4xl">
      <Image
        src={thumbnailUrl}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
      <div className="absolute bottom-6 left-6 z-10">
        <h2 className="text-white text-4xl font-bold drop-shadow-lg">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default MovieBanner;
