import React from 'react'
import Link from 'next/link'
import { Search } from 'lucide-react'

const SearchButton = () => {
  return (
    <Link href="/search" className="relative">
      <Search width={28} height={28} className="text-white" />
    </Link>
  );
}

export default SearchButton
