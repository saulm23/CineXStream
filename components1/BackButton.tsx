import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const BackButton = () => {
  return (
    <Link href="/" className="p-2 rounded-full bg-[#3f1a6d]">
      <ArrowLeft width={28} height={28} className="text-white" />
    </Link>
  );
}

export default BackButton