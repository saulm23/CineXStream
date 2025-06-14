'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  title: string;
  year: string;
  duration: string;
  genre: string[] | string;
  age: string;
  trailerUrl?: string;
  thumbnailUrl: string;
};

const MovieDescription = ({
  title,
  year,
  duration,
  genre,
  age,
  trailerUrl,
  thumbnailUrl,
}: Props) => {
  return (
    <div className="w-full px-4 pb-8 space-y-6 text-white">
      {/* Trailer Preview */}
      {trailerUrl && (
        <Link
          href={trailerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block w-full h-56 rounded-xl overflow-hidden shadow-lg group"
        >
          <Image
            src={thumbnailUrl}
            alt={`Trailer preview of ${title}`}
            fill
            className="object-cover group-hover:brightness-75 transition duration-300"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">▶</span>
            </div>
          </div>
        </Link>
      )}

      {/* Movie Details */}
      <div className="space-y-2 text-sm text-gray-200">
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <p>
          📅 <strong>Año:</strong> {year}
        </p>
        <p>
          ⏱️ <strong>Duración:</strong> {duration}
        </p>
        <p>
          🎬 <strong>Género:</strong>{' '}
          {Array.isArray(genre) ? genre.join(', ') : genre}
        </p>
        <p>
          🎟️ <strong>Clasificación:</strong> {age}
        </p>
      </div>
    </div>
  );
};

export default MovieDescription;
