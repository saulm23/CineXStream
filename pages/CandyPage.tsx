import React from 'react'
import BottomNavBar from "@/components1/BottomNavBar";
import SearchButton from "@/components1/SearchButton";
import BackButton from "@/components1/BackButton";
import CarouselCombos from "@/components1/CarouselCombos";
import CarouselCandyRecomendation from "@/components1/CarouselCandyRecomendation";
import Image from 'next/image';


const CandyPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#1e003b] text-white">

      <div className="relative flex items-center justify-between px-4 py-3 bg-[#120029]">
        <BackButton />
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-lg font-bold">Candy - Bar</h1>
        <SearchButton />
      </div>
      
      <main className='flex-1'>
        <Image
          src="/picocadulce.png"
          alt="Candy Bar"
          width={390}
          height={207}
          className="w-full h-auto object-cover"
        />
        <h1>Nuestros Combos</h1>
        <CarouselCombos />
        <h1>Recomendados</h1>
        <CarouselCandyRecomendation/>

      </main>


      <BottomNavBar />
    </div>
  )
}


    
export default CandyPage