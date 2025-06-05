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

      {/* Centered Content with Logo and Form */}
      <div className="absolute inset-0 z-30 flex justify-center items-center px-4">
        <div className="flex flex-col items-center gap-6">
          <Image
            src={logo}
            alt="CineXStream Logo"
            width={160}
            height={60}
            className="object-contain"
          />
          {children}
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
