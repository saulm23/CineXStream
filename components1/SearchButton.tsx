import { Search } from 'lucide-react'
import React from 'react'

const SearchButton = () => {
  return (
    <div className="flex items-center gap-x-8">
        <Search className="w-5 h-5 text-gray-300 cursor-pointer"/>

    </div>
  )
}

export default SearchButton