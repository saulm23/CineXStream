'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import SeatsGrid from '@/components1/SeatsGrid';
import  Button from '@/components1/Button';

type Seat = {
  id: string;
  row: string;
  number: number;
  available: boolean;
  price: number;
};

const generateSeats = (): Seat[] =>
  Array.from({ length: 80 }, (_, i) => ({
    id: `seat-${i + 1}`,
    row: String.fromCharCode(65 + Math.floor(i / 10)), // Rows A–H
    number: (i % 10) + 1,
    available: Math.random() > 0.2,
    price: 30,
  }));

const ComprarClient = ({ movieId }: { movieId: string }) => {
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);
  const router = useRouter();

  const seats = generateSeats();
  const totalPrice = selectedSeats.length * 30;

  const handleSeatSelect = (newSeats: Seat[]) => {
    setSelectedSeats(newSeats);
  };

  return (
    <div className="flex flex-col justify-between">
      <SeatsGrid seats={seats} onSelect={handleSeatSelect} />

      <div className="mt-6 bg-gray-900 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Resumen</h3>
        <p><strong>Fecha:</strong> Lunes 11/08</p>
        <p><strong>Hora:</strong> 18:00</p>
        <p><strong>Sección:</strong> Sala 1</p>
        <p><strong>Asientos:</strong> {selectedSeats.map(s => `${s.row}${s.number}`).join(', ') || 'Ninguno'}</p>
        <p className="mt-2"><strong>Total:</strong> Bs. {totalPrice}</p>

        <div className="flex justify-center mt-4">
          <Button
            className="rounded-full px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-lg"
            onClick={() => router.push(`/pago/${movieId}`)}
          >
            Comprar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ComprarClient;
