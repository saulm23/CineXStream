'use client';

import TopBar from '@/components1/TopBar';
import React, { useEffect, useState } from 'react';

type Seat = {
  id: string;
  row: string;
  number: number;
  available: boolean;
};

type SeatsGridProps = {
  seats: Seat[];
  onSelect: (selectedSeats: Seat[]) => void;
};

const SeatsGrid: React.FC<SeatsGridProps> = ({ seats, onSelect }) => {
  const [selectedSeatIds, setSelectedSeatIds] = useState<Set<string>>(new Set());

  const toggleSeat = (seat: Seat) => {
    if (!seat.available) return;

    const newSelected = new Set(selectedSeatIds);
    if (newSelected.has(seat.id)) {
      newSelected.delete(seat.id);
    } else {
      newSelected.add(seat.id);
    }
    setSelectedSeatIds(newSelected);

    // Send selected seat objects back to parent
    const selectedSeatsArray = seats.filter(s => newSelected.has(s.id));
    onSelect(selectedSeatsArray);
  };

  return (
    <div className="grid grid-cols-10 gap-2">
        <TopBar/>
      {seats.map(seat => {
        const isSelected = selectedSeatIds.has(seat.id);
        return (
          <button
            key={seat.id}
            onClick={() => toggleSeat(seat)}
            disabled={!seat.available}
            className={`
              w-8 h-8 rounded text-sm
              ${seat.available ? 'bg-gray-700 hover:bg-gray-500' : 'bg-gray-900 cursor-not-allowed opacity-50'}
              ${isSelected ? 'bg-green-500' : ''}
            `}
            aria-label={`Seat ${seat.row}${seat.number} ${seat.available ? 'available' : 'unavailable'}`}
          >
            {seat.row}{seat.number}
          </button>
        );
      })}
    </div>
  );
};

const ComprarPage = () => {
  const [seats, setSeats] = useState<Seat[]>([]);
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);

  useEffect(() => {
    const generatedSeats = Array.from({ length: 80 }, (_, i) => ({
      id: `seat-${i + 1}`,
      row: String.fromCharCode(65 + Math.floor(i / 10)),
      number: (i % 10) + 1,
      available: Math.random() > 0.2,
    }));

    setSeats(generatedSeats);
  }, []);

  const handleSeatSelect = (seats: Seat[]) => {
    setSelectedSeats(seats);
  };

  // Calculate total price (example: $5 per seat)
  const totalPrice = selectedSeats.length * 5;

  return (
    <div className="min-h-screen p-6 bg-black text-white max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Selecciona tus asientos</h2>

      {seats.length > 0 ? (
        <SeatsGrid seats={seats} onSelect={handleSeatSelect} />
      ) : (
        <p>Cargando asientos...</p>
      )}

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Asientos seleccionados:</h3>
        <p>{selectedSeats.length > 0
          ? selectedSeats.map(s => `${s.row}${s.number}`).join(', ')
          : 'Ninguno'}</p>

        <p className="mt-2 font-semibold">
          Total: ${totalPrice}
        </p>

        <button
          disabled={selectedSeats.length === 0}
          className={`mt-4 w-full py-3 rounded-full text-black font-bold transition 
            ${selectedSeats.length === 0 ? 'bg-gray-700 cursor-not-allowed' : 'bg-green-400 hover:bg-green-500'}`}
        >
          Comprar
        </button>
      </div>
    </div>
  );
};

export default ComprarPage;
