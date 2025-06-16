'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import Button from './Button';

type TicketSummaryProps = {
  movieId: string;
  movieTitle: string;
  date: string;
  time: string;
  selectedSeats: string[];
  pricePerSeat: number;
  onConfirm: () => void;
};

const TicketSummary = ({
  movieId,
  movieTitle,
  date,
  time,
  selectedSeats,
  pricePerSeat,
  onConfirm,
}: TicketSummaryProps) => {
  const total = selectedSeats.length * pricePerSeat;
  const router = useRouter();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1b002a] text-white p-4 shadow-xl z-50 rounded-t-2xl">
      <div className="flex flex-col space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-300">Película:</span>
          <span className="font-semibold">{movieTitle}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-300">Fecha:</span>
          <span className="font-semibold">{date}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-300">Hora:</span>
          <span className="font-semibold">{time}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-300">Asientos:</span>
          <span className="font-semibold">{selectedSeats.join(', ')}</span>
        </div>
        <div className="flex justify-between text-lg font-bold pt-2 border-t border-white/10">
          <span>Total:</span>
          <span>Bs {total.toFixed(2)}</span>
        </div>

        {/* ✅ Único botón final */}
        <button
          onClick={() => router.push(`/pago/${movieId}`)}
          className="mt-3 w-full bg-pink-600 hover:bg-pink-700 py-3 rounded-xl transition font-semibold"
        >
          Confirmar Compra
        </button>
      </div>
    </div>
  );
};

export default TicketSummary;
