'use client'

import React from 'react'
import Link from 'next/link'
import { Home, ShoppingCart, Ticket, User, LayoutGrid } from 'lucide-react'

const BottomNavBar = () => {
  const navItems = [
    { icon: <Home size={24} />, href: '/', label: 'Home' },
    { icon: <ShoppingCart size={24} />, href: '/cart', label: 'Cart' },
    { icon: <LayoutGrid size={24} />, href: '/browse', label: 'Browse', center: true },
    { icon: <Ticket size={24} />, href: '/tickets', label: 'Tickets' },
    { icon: <User size={24} />, href: '/profile', label: 'Profile' },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#1b002a] py-4 px-6 flex justify-between items-center rounded-t-3xl z-50">
      {navItems.map((item, index) => (
        <Link
          href={item.href}
          key={index}
          className={`relative flex flex-col items-center text-white ${
            item.center
              ? 'bg-gradient-to-b from-purple-700 to-purple-900 p-4 rounded-full -translate-y-6 shadow-md z-10'
              : ''
          }`}
        >
          {item.icon}
        </Link>
      ))}
    </nav>
  )
}

export default BottomNavBar
