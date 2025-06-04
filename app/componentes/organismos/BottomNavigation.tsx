"use client"

import { Home, ShoppingCart, Ticket, User, LayoutGrid, Link } from 'lucide-react'
import { useState } from 'react'

export default function BottomNavigation() {
  const [active, setActive] = useState(0)

  const navItems = [
    { icon: <Home.svg />, label: 'Home' },
    { icon: <ShoppingCart.svg />, label: 'Cart' },
    { icon: <LayoutGrid.svg />, label: 'Browse' },
    { icon: <Ticket.svg />, label: 'Tickets' },
    { icon: <User.svg />, label: 'Profile' },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#19042E] py-2 px-4 flex justify-between items-center rounded-t-3xl shadow-md z-50">
      {navItems.map((item, index) => (
        <Link
          key={index}
          onClick={() => setActive(index)}
          className={`flex flex-col items-center text-xs ${
            active === index ? 'text-white' : 'text-gray-400'
          }`}
        >
          {item.icon}
        </Link>
      ))}
    </nav>
  )
}
