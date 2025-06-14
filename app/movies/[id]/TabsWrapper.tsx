'use client';

import React, { useState } from 'react';
import FuncionesTab from '@/components1/FuncionesTab';
import DescripcionTab from '@/components1/DescripcionTab';
import TabBar from '@/components1/TabBar';

type Movie = {
  id: string;
  title: string;
  thumbnailUrl: string;
  genre: string[];
  age: string;
  duration: string;
  trailerVideo: string;
  movieVideo: string;
};

type TabsWrapperProps = {
  movie: Movie;
};

const TabsWrapper = ({ movie }: TabsWrapperProps) => {
  const [activeTab, setActiveTab] = useState<'funciones' | 'descripcion'>('funciones');

  return (
    <div className="flex flex-col flex-grow relative z-10 bg-black/60 backdrop-blur-sm">
      <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-grow overflow-auto px-4 py-6">
        {activeTab === 'funciones' ? (
          <FuncionesTab movie={movie} />
        ) : (
          <DescripcionTab movie={movie} />
        )}
      </main>
    </div>
  );
};

export default TabsWrapper;
