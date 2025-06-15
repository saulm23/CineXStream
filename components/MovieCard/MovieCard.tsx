'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Star, Search, X } from 'lucide-react';
import styles from './MovieCard.module.css';
import { Movie } from '@/hooks/useMovieSearch';

const SingleMovieDisplay = ({ movie }: { movie: Movie }) => {
  const ratingText = movie.rating ? `${movie.rating.toFixed(1)}/10` : '--/10';
  return (
    <article className={styles.card}>
      <div className={styles.posterWrapper}>
        {movie.poster ? (
          <img src={movie.poster} alt={movie.title} className={styles.poster} />
        ) : (
          <div className={styles.noPoster}><span>Sin Imagen</span></div>
        )}
      </div>
      <div className={styles.cardContent}>
        <h2 className={styles.title}>{movie.title}</h2>
        <div className={styles.metaRow}>
          <span className={styles.year}>{movie.year || '----'}</span>
          <div className={styles.rating}>
            <Star size={16} className={styles.starIcon} />
            <span className={styles.ratingText}>{ratingText}</span>
          </div>
        </div>
        {movie.genre && <div className={styles.genrePill}>{movie.genre}</div>}
        <p className={styles.description}>{movie.description || 'Sin descripción disponible.'}</p>
      </div>
    </article>
  );
};

interface Props {
  pelicula: Movie;
  allMovies: Movie[];
  onMovieSelect: (movie: Movie) => void;
}

export default function MovieCard({ pelicula, allMovies, onMovieSelect }: Props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [internalResults, setInternalResults] = useState<Movie[]>([]);

  useEffect(() => {
    if (searchQuery.length < 2) {
      setInternalResults([]);
      return;
    }
    const results = allMovies.filter(movie =>
      movie.id !== pelicula.id &&
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 5);

    setInternalResults(results);
  }, [searchQuery, allMovies, pelicula.id]);

  const handleResultClick = (movie: Movie) => {
    onMovieSelect(movie);
    setSearchQuery('');
  };

  const recommendedMovies = useMemo(() => {
    return allMovies.filter(movie => movie.id !== pelicula.id).slice(0, 6);
  }, [allMovies, pelicula.id]);

  return (
    <div className={styles.detailPageContainer}>
      {/* Cabecera con búsqueda interna */}
      <div className={styles.headerContainer}>
        <div className={styles.header}>
          <div className={styles.searchWrapper}>
            <Search size={20} className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Buscar y reemplazar película..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className={styles.clearButton}>
                <X size={20} />
              </button>
            )}

            {internalResults.length > 0 && (
              <div className={styles.internalSuggestions}>
                {internalResults.map(result => (
                  <button
                    key={result.id}
                    className={styles.internalSuggestionItem}
                    onClick={() => handleResultClick(result)}
                  >
                    {result.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className={styles.mainContent}>
        <section>
          <SingleMovieDisplay movie={pelicula} />
        </section>

        <section>
          <h2 className={styles.sectionTitle}>También te podría gustar</h2>
          <div className={styles.recommendationsGrid}>
            {recommendedMovies.map((movie) => (
              <SingleMovieDisplay key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
