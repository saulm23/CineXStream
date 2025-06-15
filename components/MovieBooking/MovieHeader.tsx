// RUTA: components/MovieBooking/MovieHeader.tsx

import React from 'react';
import Image from 'next/image';
import styles from './MovieHeader.module.css';
import { Movie } from '@/hooks/useMovieSearch'; // Importamos la interfaz correcta

interface MovieHeaderProps {
  movie: Movie; // Espera la interfaz Movie
  onBack: () => void;
}

const MovieHeader = ({ movie, onBack }: MovieHeaderProps) => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.background}>
        <Image
          src={movie.poster || '/default-poster.jpg'} // <-- USA 'poster'
          alt={`Póster de ${movie.title}`}            // <-- USA 'title'
          layout="fill"
          objectFit="cover"
          quality={80}
        />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.content}>
        <button onClick={onBack} className={styles.backButton} aria-label="Volver atrás">
          ←
        </button>
        <div className={styles.details}>
          <h1>{movie.title}</h1>                     
          <p>{movie.description} <a href="#" className={styles.readMore}>Leer más</a></p> 
        </div>
      </div>
    </div>
  );
};

export default MovieHeader;