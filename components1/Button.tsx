'use client'

import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

type ButtonProps = {
  Img?: string | StaticImageData
  ImgAlt?: string
  text?: string
  redirectTo?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
  children?: React.ReactNode
  Icon?: React.ReactNode
}

const Button = ({
  Img,
  ImgAlt,
  text,
  redirectTo,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  children,
  Icon,
}: ButtonProps) => {


  const content = (
    <>
      {Img && (
        <Image
          src={Img}
          alt={ImgAlt ?? 'button'}
          width={24}
          height={24}
          className="mr-2"
        />
      )}
      {Icon && <span className="mr-2">{Icon}</span>}
      {text && <span>{text}</span>}
      {children}
    </>
  )

  if (redirectTo) {
    return (
      <Link href={redirectTo} className={className}>
        {content}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={className}>
      {content}
    </button>
  )
}

export default Button
