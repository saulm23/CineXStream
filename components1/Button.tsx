'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils' // optional if you're using a class merge utility

type ButtonProps = {
  imgSrc?: string
  alt?: string
  text?: string
  href: string
  className?: string
  newTab?: boolean
  ariaLabel?: string
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
  imgSrc,
  alt = '',
  text,
  href,
  className = '',
  newTab = false,
  ariaLabel,
  disabled = false,
}) => {
  if (disabled) {
    return (
      <span
        className={cn(
          'flex items-center gap-2 px-4 py-2 rounded bg-gray-400 text-white opacity-50 cursor-not-allowed',
          className
        )}
        aria-disabled="true"
      >
        {imgSrc && <Image src={imgSrc} alt={alt} width={20} height={20} />}
        {text && <span>{text}</span>}
      </span>
    )
  }

  return (
    <Link
      href={href}
      className={cn('flex items-center gap-2 px-4 py-2 rounded bg-purple-600 text-white', className)}
      target={newTab ? '_blank' : undefined}
      rel={newTab ? 'noopener noreferrer' : undefined}
      aria-label={ariaLabel || text}
    >
      {imgSrc && <Image src={imgSrc} alt={alt} width={20} height={20} />}
      {text && <span>{text}</span>}
    </Link>
  )
}

export default Button
