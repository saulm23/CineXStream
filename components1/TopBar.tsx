import Image from 'next/image'
import Link from 'next/link'
import { Bell, Search } from 'lucide-react'

const TopBar = () => (
  <div className="w-full flex items-center justify-between px-4 py-3 bg-[#120029]">
    <div className="cursor-pointer w-10 flex justify-start">
      <Link href="/search" className="relative">
        <Search size = {28} className="text-white"/>
        <span className="absolute top-0 right-0 h-2 w-2"></span>
      
      </Link>
    </div>

    <div className="flex justify-center flex-1">
      <Image
        src="/logo.svg"
        alt="CineXStream Logo"
        width={140}
        height={40}
        className="object-contain"
      />
    </div>

    <div className="w-10 flex justify-end">
      <Link href="/notifications" className="relative">
        <Bell size={28} className="cursor-pointer text-white" />
        <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
      </Link>
    </div>
  </div>
)

export default TopBar