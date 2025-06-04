'use client'

import Image from 'next/image'
import React from 'react'

interface PromoCardProps {
  title: string
  message: string
  imageUrl: string
  isNew?: boolean
}

const PromoCard: React.FC<PromoCardProps> = ({ title, message, imageUrl, isNew = false }) => {
  return (
    <div className="relative w-full max-w-sm rounded-xl overflow-hidden shadow-lg">
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={250}
        className="object-cover w-full h-auto"
      />
      {isNew && (
        <span className="absolute top-2 left-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full font-bold">
          NEW
        </span>
      )}
      <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black via-transparent to-transparent text-white">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm">
          <strong>Pre-venta ahora:</strong> {message.replace(/^Pre-venta ahora:/i, '')}
        </p>
      </div>
    </div>
  )
}

export default PromoCard
