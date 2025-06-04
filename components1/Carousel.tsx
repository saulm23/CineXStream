'use client'

import React from 'react'
import Image from 'next/image'

const placeholderMovies = [
  {
    title: 'Spider-Man: No Way Home',
    cover: '/spiderman.jpg',
  },
  {
    title: 'Doctor Strange',
    cover: '/spiderman.jpg',
  },
  {
    title: 'Black Panther',
    cover: '/spiderman.jpg',
  },
]

const Carousel = () => {
  return (
    <div className="overflow-x-auto whitespace-nowrap py-4 px-2">
      {placeholderMovies.map((movie, index) => (
        <div
          key={index}
          className="inline-block mx-2 w-40 flex-shrink-0"
        >
          <div className="relative h-56 w-full rounded-lg overflow-hidden">
            <Image
              src={movie.cover}
              alt={movie.title}
              fill
              className="object-cover"
            />
          </div>
          <p className="text-white text-sm mt-2 text-center">{movie.title}</p>
        </div>
      ))}
    </div>
  )
}

export default Carousel
