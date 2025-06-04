'use client'

import React from 'react'
import Link from 'next/link'
import { Home, ShoppingCart, Ticket, User, LayoutGrid } from 'lucide-react'

const BottomNavBar = () => {
  const navItems = [
    { icon: <Home size={28} />, href: '/', label: 'Home' },
    { icon: <ShoppingCart size={28} />, href: '/Combos', label: 'Cart' },
    { icon: <LayoutGrid size={28} />, href: '/browse', label: 'Browse', isCenter: true },
    { icon: <Ticket size={28} />, href: '/Tickets', label: 'Tickets' },
    { icon: <User size={28} />, href: '/Profile', label: 'Profile' },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#1b002a] py-4 px-6 flex justify-around items-center rounded-t-3xl z-50">
      {navItems.map((item, index) => (
        <Link
          href={item.href}
          key={index}
          className={`text-white flex items-center justify-center 
            ${item.isCenter ? 'relative -top-5 bg-gradient-to-b from-purple-600 to-purple-900 w-14 h-14 rounded-full shadow-lg z-10' : ''}`}
        >
          {item.icon}
        </Link>
      ))}
    </nav>
  )
}

export default BottomNavBar
