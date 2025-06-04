"use client"

import Image from 'next/image'
import IconButton from '../atomos/IconButton'
import { Bell, Search } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-4 py-2 bg-gradient-to-b from-[#19042E] to-transparent">
      <IconButton>
        <Search className="text-white" size={20} />
      </IconButton>

      <Image
        src="/spiderman.jpg" 
        alt="CineXStream Logo"
        width={120}
        height={40}
      />

      <IconButton>
        <Bell className="text-white" size={20} />
      </IconButton>
    </header>
  )
}
