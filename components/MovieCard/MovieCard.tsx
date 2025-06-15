'use client';

import React from 'react';
import styles from './MovieCard.module.css';

interface Props {
  pelicula: {
    id: string;
    title: string;
    year?: string;
    genre?: string;
    poster?: string;
    rating?: number;
    description?: string;
  };
}

export default function MovieCard({ pelicula }: Props) {
  const ratingText = pelicula.rating ? pelicula.rating.toFixed(1) : '--';
  
  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        {pelicula.poster ? (
          <img 
            src={pelicula.poster} 
            alt={pelicula.title} 
            className={styles.poster} 
          />
        ) : (
          <div className={styles.noPoster}>
            <span>No Image</span>
          </div>
        )}
      </div>
      
      <div className={styles.cardContent}>
        <h2 className={styles.title}>{pelicula.title}</h2>
        
        <div className={styles.metaRow}>
          <span className={styles.year}>{pelicula.year || '----'}</span>
          <div className={styles.rating}>
            <span className={styles.star}>⭐</span>
            <span>{ratingText}/10</span>
          </div>
        </div>
        
        {pelicula.genre && (
          <div className={styles.genreContainer}>
            <span className={styles.genre}>{pelicula.genre}</span>
          </div>
        )}
        
        <p className={styles.description}>
          {pelicula.description || 'Sin descripción disponible.'}
        </p>
      </div>
    </article>
  );
}