// RUTA: components/MovieCard/MovieCard.tsx

'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Star, Search, ArrowLeft, X } from 'lucide-react';
import styles from './MovieCard.module.css';
import { Movie } from '@/hooks/useMovieSearch'; // Importamos la interfaz para consistencia

/**
 * Sub-componente para mostrar una tarjeta de película individual.
 * Es un botón para que toda la tarjeta sea clicable y active la vista de reserva.
 */
const SingleMovieDisplay = ({ movie, onBookMovie }: { movie: Movie, onBookMovie: (movie: Movie) => void }) => {
  const ratingText = movie.rating ? `${movie.rating.toFixed(1)}/10` : '--/10';
  
  return (
    <button
      className={styles.cardButton}
      onClick={() => onBookMovie(movie)}
      aria-label={`Reservar ${movie.title}`}
    >
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
    </button>
  );
};

/**
 * Props que el componente MovieCard espera recibir de su padre (SearchComponent).
 */
interface Props {
  pelicula: Movie;
  allMovies: Movie[];
  onMovieSelect: (movie: Movie) => void;
  onBookMovie: (movie: Movie) => void;
}

/**
 * Componente principal que actúa como una página de detalle completa.
 */
export default function MovieCard({ pelicula, allMovies, onMovieSelect, onBookMovie }: Props) {
  // Estado local para la búsqueda interna.
  const [searchQuery, setSearchQuery] = useState('');
  const [internalResults, setInternalResults] = useState<Movie[]>([]);

  // Efecto para la búsqueda interna: se ejecuta cuando el usuario escribe.
  useEffect(() => {
    // Limpia los resultados si la búsqueda es corta
    if (searchQuery.length < 2) {
      setInternalResults([]);
      return;
    }
    // Si no hay lista de películas, no hace nada
    if (!allMovies) return;

    // Filtra las películas para encontrar coincidencias.
    const results = allMovies.filter(movie =>
      movie.id !== pelicula.id && // Excluye la película que ya se está mostrando
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 5); // Limita los resultados a 5 para no saturar la UI.

    setInternalResults(results);
  }, [searchQuery, allMovies, pelicula.id]);

  // Manejador para el clic en una sugerencia de la búsqueda interna.
  const handleResultClick = (movie: Movie) => {
    onMovieSelect(movie); // Llama a la función del padre para actualizar la película principal.
    setSearchQuery('');   // Limpia el input de búsqueda.
  };

  // Calcula la lista de recomendaciones por defecto.
  const recommendedMovies = useMemo(() => {
    if (!allMovies) return [];
    return allMovies.filter(movie => movie.id !== pelicula.id).slice(0, 6);
  }, [allMovies, pelicula.id]);

  return (
    <div className={styles.detailPageContainer}>
      {/* Cabecera con la barra de búsqueda funcional */}
      <div className={styles.headerContainer}>
        <div className={styles.header}>
            <button className={styles.backButton} disabled>
                <ArrowLeft size={20} />
            </button>
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
                    <button onClick={() => setSearchQuery('')} className={styles.clearButton} aria-label="Limpiar búsqueda">
                        <X size={20} />
                    </button>
                )}

                {/* Lista de resultados de la búsqueda interna */}
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

      {/* Contenido principal de la página */}
      <div className={styles.mainContent}>
        {/* Película principal destacada, ahora es clicable */}
        <section>
          <SingleMovieDisplay movie={pelicula} onBookMovie={onBookMovie} />
        </section>

        {/* Sección de "También te podría gustar", también clicable */}
        <section>
          <h2 className={styles.sectionTitle}>También te podría gustar</h2>
          <div className={styles.recommendationsGrid}>
            {recommendedMovies.map((movie) => (
              <SingleMovieDisplay key={movie.id} movie={movie} onBookMovie={onBookMovie} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}