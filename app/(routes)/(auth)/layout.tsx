'use client'

import React, { ReactNode } from 'react'
import Image from 'next/image'
import backgroundImage from '../../../public/movie_background.jpg'
import logo from '../../../public/logo.svg'

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="text-white relative w-full h-screen overflow-hidden">
      <Image
        src={backgroundImage}
        alt="Background Image"
        fill
        className="object-cover blur-md z-0"
        priority
      />

      <div className="absolute inset-0 bg-purple-800/60 mix-blend-multiply z-10" />

      <div className="absolute inset-0 z-30 flex justify-center items-center px-4">
        <div className="flex flex-col items-center gap-6">
          <Image
            src={logo}
            alt="CineXStream Logo"
            width={200}
            height={60}
            className="object-contain"
          />
          <div className="h-full w-full max-m-md mx-auto">
          {/*<div className="bg-black/70 px-14 py-16">{children}</div>*/}
          {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
