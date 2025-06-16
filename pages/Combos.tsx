'use client';

import React from 'react';
import BackButton from '@/components1/BackButton';
import SearchButton from '@/components1/SearchButton';
import Combos from '@/components1/Combos';

const CombosPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1f0034] to-[#3d0066] px-4 pt-6 text-white font-sans pb-28">
      
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-4">
        <BackButton />
        <h2 className="text-lg font-semibold">Candy – Bar</h2>
        <SearchButton />
      </div>

      {/* Featured Section */}
      <div className="relative rounded-xl overflow-hidden">
        {/* NEW Label */}
        <span className="absolute top-2 left-2 bg-purple-700 text-white text-xs px-2 py-1 rounded-md z-10">
          NEW
        </span>

        {/* Image */}
        <img
          src="/popcorn-cover.jpg"
          alt="Popcorn and soda"
          className="w-full h-44 object-cover rounded-xl"
        />

        {/* Title and Tags */}
        <div className="mt-3">
          <h1 className="text-2xl font-bold">Pipoca Dulce</h1>
          <div className="flex gap-2 mt-2">
            <span className="bg-pink-100 text-pink-700 text-xs font-semibold px-3 py-1 rounded-full">
              Gluten-Free
            </span>
            <span className="bg-yellow-200 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
              Bestseller
            </span>
          </div>
        </div>
      </div>

      {/* Combos Section */}
      <section className="mt-6">
        <h3 className="text-lg font-semibold mb-3">Nuestros Combos</h3>
        <Combos />
      </section>

      {/* Purchase Button */}
      <div className="fixed bottom-4 left-0 right-0 flex justify-center z-50">
        <button className="bg-purple-700 hover:bg-purple-800 transition text-white px-8 py-3 rounded-full shadow-lg text-sm font-semibold">
          Realizar Compra
        </button>
      </div>
    </div>
  );
};

export default CombosPage;
