// RUTA: components/SearchComponent/SearchComponent.tsx

"use client";

import React, { useState } from "react";
import { ChevronLeft, Search, Clock, TrendingUp, X } from "lucide-react";
import { useMovieSearch, Movie, SearchItem } from "@/hooks/useMovieSearch";
import styles from "./SearchComponent.module.css";
import MovieCard from "../MovieCard/MovieCard";
import MovieBooking from "../MovieBooking/MovieBooking";
import Link from "next/link";

const SearchComponent = () => {
  // --- Estados que controlan la UI ---
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [bookingMovie, setBookingMovie] = useState<Movie | null>(null);

  // Obtenemos los datos y la lógica del hook personalizado
  const {
    suggestions,
    recentSearches,
    isLoading,
    debouncedSearch,
    saveToRecentSearches,
    clearRecentSearches,
    removeRecentSearch,
    setSuggestions,
    allMovies,
  } = useMovieSearch();

  // --- MANEJADORES DE EVENTOS (sin cambios) ---
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (value.length >= 2) {
      setShowSuggestions(true);
      debouncedSearch(value, 300);
    } else {
      setShowSuggestions(false);
      setSuggestions([]);
    }
  };
  const handleSuggestionClick = (movie: Movie) => {
    saveToRecentSearches(movie.title);
    setSelectedMovie(movie);
    setShowSuggestions(false);
  };
  const handleRecentSearchClick = (item: SearchItem) => {
    setSearchQuery(item.title);
    setShowSuggestions(true);
    debouncedSearch(item.title, 0);
  };
  const clearSearch = () => {
    setSearchQuery("");
    setShowSuggestions(false);
    setSuggestions([]);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() && suggestions.length > 0) {
      handleSuggestionClick(suggestions[0]);
    }
  };

  // --- RENDERIZADO CONDICIONAL DE 3 NIVELES ---

  // VISTA 1: PANTALLA DE RESERVA
  if (bookingMovie) {
    return (
      <MovieBooking 
        movie={bookingMovie}
        onBack={() => setBookingMovie(null)} 
      />
    );
  }

  // VISTA 2: PÁGINA DE DETALLE
  if (selectedMovie) {
    return (
      <div className={styles.resultsContainer}>
        <div className={styles.resultsHeader}>
          <button
            onClick={() => setSelectedMovie(null)}
            className={styles.backButtonMain}
            aria-label="Volver a la búsqueda"
          >
            <ChevronLeft size={24} />
          </button>
        </div>
        <MovieCard 
          pelicula={selectedMovie} 
          allMovies={allMovies || []} 
          onMovieSelect={setSelectedMovie}
          onBookMovie={setBookingMovie}
        />
      </div>
    );
  }

  // VISTA 3: PANTALLA DE BÚSQUEDA (CON BOTÓN DE VOLVER AÑADIDO)
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {/* ▼▼▼ CÓDIGO AÑADIDO ▼▼▼ */}
        <Link href="/" passHref>
          <button className={styles.backButtonMain} aria-label="Volver al inicio">
            <ChevronLeft size={24} />
          </button>
        </Link>
        {/* ▲▲▲ FIN DEL CÓDIGO AÑADIDO ▲▲▲ */}

        <div className={styles.searchWrapper}>
          <form onSubmit={handleSubmit} className={styles.searchForm}>
            <div className={styles.searchInput}>
              <Search size={20} className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Buscar películas..."
                value={searchQuery}
                onChange={handleSearchChange}
                className={styles.input}
                autoFocus
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className={styles.clearButton}
                  aria-label="Limpiar búsqueda"
                >
                  <X size={18} />
                </button>
              )}
              {isLoading && (
                <div className={styles.loading}>
                  <div className={styles.spinner}></div>
                </div>
              )}
            </div>
          </form>

          {showSuggestions && suggestions.length > 0 && (
            <div className={styles.suggestions}>
              {suggestions.map((movie) => (
                <button
                  key={movie.id}
                  type="button"
                  onClick={() => handleSuggestionClick(movie)}
                  className={styles.suggestionItem}
                >
                  <Search size={16} className={styles.suggestionIcon} />
                  <span>{movie.title}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {recentSearches.length > 0 && (
        <div className={styles.section}>
          <div className={styles.card}>
            <div className={styles.sectionHeader}>
              <Clock size={20} className={styles.sectionIcon} />
              <h2 className={styles.sectionTitle}>Búsquedas recientes</h2>
              <button
                onClick={clearRecentSearches}
                className={styles.clearAllButton}
                aria-label="Limpiar búsquedas recientes"
              >
                <X size={16} />
              </button>
            </div>
            <div className={styles.tagContainer}>
              {recentSearches.slice(0, 8).map((item) => (
                <div key={item.id} className={styles.tagWrapper}>
                  <button onClick={() => handleRecentSearchClick(item)} className={styles.tag}>
                    {item.title}
                  </button>
                  <button onClick={() => removeRecentSearch(item.id)} className={styles.removeTag} aria-label={`Eliminar ${item.title}`}>
                    <X size={12} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className={styles.section}>
        <div className={styles.popularCard}>
          <div className={styles.sectionHeader}>
            <TrendingUp size={20} className={styles.popularIcon} />
            <h2 className={styles.sectionTitle}>Películas populares</h2>
          </div>
          <div className={styles.movieList}>
            {(allMovies || []).slice(0, 5).map((movie, index) => (
              <button
                key={movie.id}
                onClick={() => handleSuggestionClick(movie)}
                className={styles.movieItem}
              >
                <span>{movie.title}</span>
                <span className={styles.movieRank}>#{index + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {showSuggestions && suggestions.length === 0 && searchQuery.length >= 2 && !isLoading && (
        <div className={styles.emptyState}>
          <Search size={48} className={styles.emptyIcon} />
          <h3>No se encontraron resultados</h3>
          <p>Intenta con otros términos de búsqueda.</p>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;