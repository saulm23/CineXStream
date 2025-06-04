'use client'
import Image from 'next/image'
import React from 'react'
import {Bell} from 'lucide-react'
import Link from 'next/link'
const TopBar = () => (
    <div className="w-full flex justify-between items-center px-4 py-3 bg-[#120029]">
        <div className='flex justify-center flex-1'>
            <Image
                src="/logo.svg"
                alt='CineXStream Logo'
                width={140}
                height={40}
                className='object-contain' />
            <Link href="/pages/notifications" className="relative">
                <Bell size={34} className="text-white" />
                <span className="absolute -top-1 -right-1 h-2 bg-red-500 rounded-full"/>
            </Link>
        </div>

    </div>
)

export default TopBar