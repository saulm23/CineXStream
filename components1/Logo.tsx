import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const Logo = () => {
  return (
    <div>
    <Link href="/">
        <Image
          alt="CineXStram"
          src="/logo.svg"
          width={160}
          height={60}
          className="object-contain"
        />
      </Link>
    </div>
  )
}

export default Logo