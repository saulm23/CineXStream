// RUTA: components/MovieBooking/MovieBooking.tsx

'use client';

import styles from './MovieBooking.module.css';
import MovieHeader from './MovieHeader';
import BookingForm from './BookingForm';
import { Movie } from '@/hooks/useMovieSearch'; // Reutilizamos la interfaz Movie de nuestro hook

// La interfaz de props ahora espera el objeto 'movie' completo.
interface MovieBookingProps {
  movie: Movie;
  onBack: () => void;
}

const MovieBooking = ({ movie, onBack }: MovieBookingProps) => {
  // Si por alguna razón no se pasa una película, mostramos un mensaje de error.
  if (!movie) {
    return (
      <div className={styles.container}>
        <p className={styles.message}>No se ha proporcionado información de la película.</p>
      </div>
    );
  }

  // No hay fetch, no hay loading, no hay estado interno. ¡Mucho más simple!
  return (
    <div className={styles.container}>
      <MovieHeader movie={movie} onBack={onBack} />
      {/* Pasamos los horarios si existen. Usaremos datos de ejemplo por ahora. */}
      <BookingForm /> 
    </div>
  );
};

export default MovieBooking;