'use client';

import React from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import Button from './Button'; // adjust path if needed

type TabBarProps = {
  activeTab: 'funciones' | 'descripcion';
  setActiveTab: React.Dispatch<React.SetStateAction<'funciones' | 'descripcion'>>;
};

const TabBar = ({ activeTab, setActiveTab }: TabBarProps) => {
  return (
    <div className="w-full flex items-center justify-between px-4 py-3 border border-[#6F0666]/30 bg-[#571360]/80 backdrop-blur-md text-white shadow-lg sticky top-0 z-50 rounded-b-xl">
      
      {/* Back Button */}
      <Button
        Icon={<ArrowLeft size={20} />}
        onClick={() => window.history.back()}
        className="flex items-center px-3 py-2 rounded-full bg-[#6F0666]/20 hover:bg-[#6F0666]/40 transition duration-200 border border-[#6F0666]/40"
      />

      {/* Tabs */}
      <div className="flex space-x-3">
        <button
          onClick={() => setActiveTab('funciones')}
          className={`px-4 py-1 rounded-full text-sm font-semibold border transition duration-200 ${
            activeTab === 'funciones'
              ? 'bg-[#6F0666] text-white border-[#6F0666] shadow'
              : 'bg-white/5 text-gray-200 border-white/10 hover:bg-white/10'
          }`}
        >
          Funciones
        </button>

        <button
          onClick={() => setActiveTab('descripcion')}
          className={`px-4 py-1 rounded-full text-sm font-semibold border transition duration-200 ${
            activeTab === 'descripcion'
              ? 'bg-[#6F0666] text-white border-[#6F0666] shadow'
              : 'bg-white/5 text-gray-200 border-white/10 hover:bg-white/10'
          }`}
        >
          Descripción
        </button>
      </div>

      {/* Search Button */}
      <Button
        Icon={<Search size={20} />}
        onClick={() => console.log('Buscar')}
        className="flex items-center px-3 py-2 rounded-full bg-[#6F0666]/20 hover:bg-[#6F0666]/40 transition duration-200 border border-[#6F0666]/40"
      />
    </div>
  );
};

export default TabBar;
