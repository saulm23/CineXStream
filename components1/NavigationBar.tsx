// app/components/NavigationBar.tsx
'use client'; // Esto es importante para usar hooks de React como useState en el App Router

import React, { useState } from 'react';
import Link from 'next/link';
// Importa los iconos necesarios de Heroicons
import { ArrowLeftIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'; 

const NavigationBar = () => {
  // Estado para controlar qué pestaña está activa (simulando navegación)
  // En una aplicación real, usarías usePathname de next/navigation para determinar la ruta activa
  const [activeTab, setActiveTab] = useState('detalles'); 

  return (
    <nav 
      className="
        fixed top-4 left-1/2 -translate-x-1/2 
        w-[calc(100%-2rem)] max-w-lg 
        bg-[oklch(15%_0.05_280_/_0.8)] backdrop-blur-md // Fondo oscuro púrpura con opacidad y desenfoque
        py-3 px-2 sm:px-4 rounded-full // Bordes muy redondeados
        flex items-center justify-between z-50 shadow-lg // Sombra para dar profundidad
        border border-[oklch(20%_0.05_280)] // Borde sutil para la barra principal
      "
    >
      {/* Botón de retroceso */}
      <Link 
        href="#" 
        className="
          flex items-center justify-center 
          w-10 h-10 rounded-full 
          bg-[oklch(25%_0.05_280)] text-white // Fondo del botón
          ring-2 ring-[oklch(70%_0.15_330)] // Anillo vibrante rosa/púrpura
          hover:bg-[oklch(30%_0.05_280)] transition-colors // Efecto hover
          shadow-[0_0_8px_rgba(255,0,255,0.3)] // Sombra para el efecto de resplandor
        "
        onClick={() => console.log('Atrás clicado')} // Solo para demostración
      >
        <ArrowLeftIcon className="h-6 w-6" />
      </Link>

      {/* Enlaces de navegación Funciones y Detalles */}
      <div className="flex items-center space-x-6 mx-auto"> {/* Centra estos elementos */}
        <Link 
          href="#" 
          className={`
            text-white font-semibold transition-colors 
            ${activeTab === 'funciones' ? 'relative' : 'hover:text-purple-300'}
          `}
          onClick={() => setActiveTab('funciones')}
        >
          Funciones
          {/* Subrayado de "Funciones" (solo visible si está activo) */}
          {activeTab === 'funciones' && (
            <span 
              className="
                absolute bottom-[-6px] left-1/2 -translate-x-1/2 
                w-full h-[2px] bg-white rounded-full 
              "
            ></span>
          )}
        </Link>
        <Link 
          href="#" 
          className={`
            text-white font-semibold transition-colors 
            ${activeTab === 'detalles' ? 'relative' : 'hover:text-purple-300'}
          `}
          onClick={() => setActiveTab('detalles')}
        >
          Detalles
          {/* Subrayado de "Detalles" (solo visible si está activo) */}
          {activeTab === 'detalles' && (
            <span 
              className="
                absolute bottom-[-6px] left-1/2 -translate-x-1/2 
                w-full h-[2px] bg-white rounded-full 
              "
            ></span>
          )}
        </Link>
      </div>

      {/* Botón de búsqueda */}
      <Link 
        href="#" 
        className="
          flex items-center justify-center 
          w-10 h-10 rounded-full 
          bg-[oklch(25%_0.05_280)] text-white 
          ring-2 ring-[oklch(70%_0.15_330)] // Anillo vibrante rosa/púrpura
          hover:bg-[oklch(30%_0.05_280)] transition-colors
          shadow-[0_0_8px_rgba(255,0,255,0.3)] // Sombra para el efecto de resplandor
        "
        onClick={() => console.log('Buscar clicado')} // Solo para demostración
      >
        <MagnifyingGlassIcon className="h-6 w-6" />
      </Link>
    </nav>
  );
};

export default NavigationBar;