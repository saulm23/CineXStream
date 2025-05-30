"use client"

import { ReactNode } from 'react'

type IconButtonProps = {
  onClick?: () => void
  children: ReactNode
}

export default function IconButton({ onClick, children }: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
    >
      {children}
    </button>
  )
}
