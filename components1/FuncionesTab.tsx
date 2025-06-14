'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ScheduleCard from './ScheduleCard';
import Button from './Button';
import { useRouter } from 'next/navigation';

type FuncionesTabProps = {
  movie: {
    id: string;
    title: string;
  };
};

const FuncionesTab = ({ movie }: FuncionesTabProps) => {
  const schedules = [
    { date: 'Lunes 11/08', time: '18:00', offsetY: '' },
    { date: 'Martes 12/08', time: '20:00', offsetY: '-translate-y-2' },
    { date: 'Miércoles 13/08', time: '16:00', offsetY: '-translate-y-4' },
    { date: 'Jueves 14/08', time: '19:30', offsetY: '-translate-y-2' },
    { date: 'Viernes 15/08', time: '21:00', offsetY: '' },
  ];
const router =useRouter();
  return (
    <div className="relative flex flex-col items-center pt-6 pb-32 px-6 text-center">
      <h1 className="text-3xl font-extrabold mb-10 drop-shadow text-center">
        {movie.title}
      </h1>
      <div className="flex gap-6 flex-wrap justify-center items-end mb-10">
        {schedules.map(({ date, time, offsetY }, i) => (
          <motion.div
            key={date}
            custom={i}
            initial="hidden"
            animate="visible"
        
            className={offsetY}
          >
            <ScheduleCard movieId={movie.id} date={date} time={time} />
          </motion.div>
        ))}
      </div>
      <div className="fixed bottom-4 left-4 right-4 z-50">
        <Button
          text="Comprar Boleto"
        
          onClick={()=> router.push(`/comprar/${movie.id}`)}

          className="fixed bottom py-4 px-6 bg-[#1b002a] text-white font-semibold rounded-xl shadow-md transition duration-300 ease-in-out text-center"
        />
      </div>
    </div>
  );
};

export default FuncionesTab;
