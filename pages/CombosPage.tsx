import React from 'react'
import BackButton from "@/components1/BackButton";
import SearchButton from "@/components1/SearchButton";
import Combos from "@/components1/Combos";
const CombosPage = () => {
  return (
    <div>
        <div>
            <BackButton/>
            <h1>Combos</h1>
            <SearchButton/>
        </div>
        <h1>Candy Bar</h1>
        <div>
          <Combos/>
        </div>
        
    </div>
  )
}

export default CombosPage