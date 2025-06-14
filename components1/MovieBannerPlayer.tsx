'use client';

import React from 'react';
import ReactPlayer from 'react-player';

type MovieBannerPlayerProps = {
  title: string;
  previewVideoUrl: string;
};

const MovieBannerPlayer = ({ title, previewVideoUrl }: MovieBannerPlayerProps) => {
  return (
    <div className="w-full max-w-3xl mx-auto p-4 text-center">
      <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg mx-auto">
        <ReactPlayer
          url={previewVideoUrl}
          playing
          muted
          loop
          width="100%"
          height="100%"
          playsinline
          style={{ objectFit: 'cover' }}
        />
      </div>
      <h2 className="text-4xl text-left font-extrabold mt-4 mb-4 text-white drop-shadow-lg">
        {title}
      </h2>
    </div>
  );
};

export default MovieBannerPlayer;
