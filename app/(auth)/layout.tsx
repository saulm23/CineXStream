'use client'

import React, { ReactNode } from 'react'
import Image from 'next/image'
import backgroundImage from '../../public/movie_background.jpg' // Replace with your image
import logo from '../../public/logo.svg' // Replace with your actual logo

type AuthBackgroundProps = {
  children: ReactNode
}

const AuthBackground: React.FC<AuthBackgroundProps> = ({ children }) => (
  <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-{3B0F56} overflow-hidden">
    {/* Blurred Background Image */}
    <Image
      src={backgroundImage}
      alt="Background"
      fill
      priority
      className="absolute inset-0 object-cover blur-md -z-10"
    />

    {/* Logo */}
    <div className="mt-12 mb-8">
      <Image
        src={logo}
        alt="CineXStream Logo"
        width={200}
        height={80}
        className="object-contain"
      />
    </div>

    {/* Foreground Content */}
    <div className="w-full max-w-sm px-6">
      {children}
    </div>
  </div>
)

export default AuthBackground
