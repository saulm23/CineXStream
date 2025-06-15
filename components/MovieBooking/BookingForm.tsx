// RUTA: components/MovieBooking/BookingForm.tsx

'use client';

import React, { useState } from 'react';
import styles from './BookingForm.module.css';

interface Schedule {
  dia: string;
  horas: string[];
}

// Datos de ejemplo con el formato "DíaSemana DD/MM"
const DUMMY_SCHEDULES: Schedule[] = [
  { dia: 'Sab 11/06', horas: ['14:00', '15:00'] },
  { dia: 'Dom 11/07', horas: ['15:00', '20:00'] },
  { dia: 'Lun 11/08', horas: ['18:00', '20:00'] },
  { dia: 'Mar 11/09', horas: ['20:00'] },
  { dia: 'Mie 11/10', horas: ['21:00'] },
];

const BookingForm = ({ schedules = DUMMY_SCHEDULES }: { schedules?: Schedule[] }) => {
  if (!schedules || schedules.length === 0) {
    return (
      <div className={styles.formContainer}>
        <p className={styles.noSchedules}>No hay horarios disponibles.</p>
      </div>
    );
  }

  const [selectedDate, setSelectedDate] = useState<string>(schedules[2]?.dia || schedules[0]?.dia || '');
  const [selectedTime, setSelectedTime] = useState<string>('');

  const getAvailableTimes = () => schedules.find(h => h.dia === selectedDate)?.horas || [];

  return (
    <div className={styles.formContainer}>
      <button className={styles.selectDayButton}>Selecciona el día y hora</button>

      <div className={styles.dateSelector}>
        {schedules.map(({ dia }) => {
          // Dividimos el string "Sab 11/06" en "Sab" y "11/06"
          const parts = dia.split(' ');
          const dayName = parts[0];
          const dayNumber = parts.slice(1).join(' ');

          return (
            <button
              key={dia}
              className={`${styles.dateButton} ${selectedDate === dia ? styles.active : ''}`}
              onClick={() => { setSelectedDate(dia); setSelectedTime(''); }}
            >
              <span className={styles.dayName}>{dayName}</span>
              <span className={styles.dayNumber}>{dayNumber}</span>
            </button>
          )
        })}
      </div>

      <div className={styles.timeSelector}>
        {getAvailableTimes().map(hora => (
          <button
            key={hora}
            className={`${styles.timeButton} ${selectedTime === hora ? styles.active : ''}`}
            onClick={() => setSelectedTime(hora)}
          >
            {hora}
          </button>
        ))}
      </div>
      <button className={styles.confirmButton}>Confirmar horario</button>
    </div>
  );
};

export default BookingForm;