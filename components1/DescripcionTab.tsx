'use client';

import React from 'react';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';
import BottomNavBar from './BottomNavBar';

type DescripcionTabProps = {
  movie: {
    trailerVideo: string;
    title: string;
    genre: string | string[];
    duration: string;
    age: string;
    description?: string;
  };
};

const DescripcionTab = ({ movie }: DescripcionTabProps) => {
  return (
    <div className="px-4 pt-6 pb-28 text-white max-w-4xl mx-auto relative">
      
      {/* Trailer with animation */}
      {movie.trailerVideo && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="rounded-xl overflow-hidden shadow-2xl mb-6"
        >
          <div className="relative w-full" style={{ paddingTop: '56.25%' /* 16:9 aspect ratio */ }}>
            <ReactPlayer
              url={movie.trailerVideo}
              controls
              width="100%"
              height="100%"
              className="absolute top-0 left-0"
              config={{
                file: {
                  attributes: {
                    preload: 'metadata',
                    playsInline: true,
                  },
                },
              }}
            />
          </div>
        </motion.div>
      )}

      {/* Title */}
      <h1 className="text-3xl font-extrabold mb-4 text-center text-[#6F0666] drop-shadow-sm">
        {movie.title}
      </h1>

      {/* Metadata */}
      <div className="text-[#e0cde9] mb-6 space-y-1 text-center">
        <p>
          <strong>Género:</strong>{' '}
          {Array.isArray(movie.genre) ? movie.genre.join(', ') : movie.genre}
        </p>
        <p><strong>Duración:</strong> {movie.duration}</p>
        <p><strong>Clasificación:</strong> {movie.age}</p>
      </div>

      {/* Description */}
      {movie.description && (
        <p className="text-gray-200 leading-relaxed text-justify tracking-wide">
          {movie.description}
        </p>
      )}

      <BottomNavBar />
    </div>
  );
};

export default DescripcionTab;
