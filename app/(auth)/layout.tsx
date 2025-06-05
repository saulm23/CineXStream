'use client'

import React, { ReactNode } from 'react'
import Image from 'next/image'
import backgroundImage from '../../public/movie_background.jpg'
import logo from '../../public/logo.svg'

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Blurred Background */}
      <Image
        src={backgroundImage}
        alt="Background Image"
        fill
        className="object-cover blur-md"
        priority
      />

      {/* Centered Logo */}
      <div className="absolute inset-0 flex justify-center items-center z-10">
        <Image
          src={logo}
          alt="CineXStream Logo"
          width={200}
          height={80}
          className="object-contain"
        />
      </div>

      {/* Children (Sign-up page, etc.) */}
      <div className="absolute inset-0 z-20 flex justify-center items-center">
        {children}
      </div>
    </div>
  )
}

export default AuthLayout
