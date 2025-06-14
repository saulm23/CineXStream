'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import TicketSummary from '@/components1/TicketSummary';

type ComprarPageProps = {
  params: { id: string };
};

const ComprarPage = ({ params }: ComprarPageProps) => {
  const movieId = params.id;
  const router = useRouter();

  // Datos simulados, reemplaza con datos reales o fetch
  const movieTitle = 'Nombre de la Película';
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [date, setDate] = useState('Lunes 11/08');
  const [time, setTime] = useState('18:00');
  const pricePerSeat = 30;

  // Simula selección de asientos para la demo
  const toggleSeat = (seat: string) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 pt-6 pb-32">
      <h1 className="text-3xl font-extrabold mb-6">Compra tus boletos</h1>

      {/* Simulación de asientos */}
      <div className="grid grid-cols-5 gap-3 max-w-md mx-auto mb-8">
        {['A1', 'A2', 'A3', 'A4', 'A5', 'B1', 'B2', 'B3', 'B4', 'B5'].map((seat) => (
          <button
            key={seat}
            onClick={() => toggleSeat(seat)}
            className={`py-3 rounded-md font-semibold transition ${
              selectedSeats.includes(seat)
                ? 'bg-pink-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-pink-500 hover:text-white'
            }`}
          >
            {seat}
          </button>
        ))}
      </div>

      {/* Información de entrada y total a pagar */}
      <TicketSummary
        movieId={movieId}
        movieTitle={movieTitle}
        date={date}
        time={time}
        selectedSeats={selectedSeats}
        pricePerSeat={pricePerSeat}
      />
    </div>
  );
};

export default ComprarPage;
