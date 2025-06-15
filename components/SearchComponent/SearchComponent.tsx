"use client";

import React, { useState } from "react";
import { ChevronLeft, Search, Clock, TrendingUp, X } from "lucide-react";
import { useMovieSearch } from "@/hooks/useMovieSearch";
import styles from "./SearchComponent.module.css";
import Link from "next/link";
import MovieCard from "../MovieCard/MovieCard";

export interface SearchItem {
  id: string;
  title: string;
}

export interface Movie {
  id: string;
  title: string;
  year?: string;
  genre?: string;
  poster?: string;
}

export interface SearchComponentProps {
  onBack?: () => void;
  onSearch?: (query: string) => void;
  onSelectItem?: (item: SearchItem) => void;
  popularMovies?: SearchItem[];
  apiUrl?: string;
}

const SearchComponent: React.FC<SearchComponentProps> = ({
  onBack,
  onSearch,
  onSelectItem,
  popularMovies = [
    { id: "1", title: "Ne Zha 2" },
    { id: "2", title: "Lilo & Stitch" },
    { id: "3", title: "Superman" },
  ],
  apiUrl,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const {
    suggestions,
    recentSearches,
    isLoading,
    debouncedSearch,
    saveToRecentSearches,
    clearRecentSearches,
    removeRecentSearch,
    setSuggestions,
  } = useMovieSearch(apiUrl);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (value.length >= 2) {
      setShowSuggestions(true);
      debouncedSearch(value);
    } else {
      setShowSuggestions(false);
      setSuggestions([]);
    }
    if (onSearch) onSearch(value);
  };

  const handleSuggestionClick = (movie: Movie) => {
    setSearchQuery(movie.title);
    saveToRecentSearches(movie.title);
    setSelectedMovie(movie);
    setShowSuggestions(false);
  };

  const handleRecentSearchClick = (item: SearchItem) => {
    setSearchQuery(item.title);
    setShowSuggestions(true);
    debouncedSearch(item.title);
    if (onSelectItem) onSelectItem(item);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setShowSuggestions(false);
    setSuggestions([]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      saveToRecentSearches(searchQuery.trim());
      setShowSuggestions(false);
      if (onSelectItem) {
        onSelectItem({ id: Date.now().toString(), title: searchQuery.trim() });
      }
    }
  };

  const handleBackClick = () => {
    if (onBack) onBack();
  };

  if (selectedMovie) {
    return (
      <div className={styles.resultsContainer}>
        <div className={styles.header}>
          <button
            onClick={() => setSelectedMovie(null)}
            className={styles.backButton}
            aria-label="Volver a la búsqueda"
          >
            <ChevronLeft size={24} />
          </button>
          <h2 className={styles.resultsTitle}>Resultado</h2>
        </div>
        <MovieCard pelicula={selectedMovie} />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/">
          <button
            onClick={handleBackClick}
            className={styles.backButton}
            aria-label="Volver"
          >
            <ChevronLeft size={24} />
          </button>
        </Link>
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
                  type="button" // 🔥 ESTA ES LA LÍNEA CLAVE
                  onClick={() => handleSuggestionClick(movie)}
                  className={styles.suggestionItem}
                >
                  <Search size={16} className={styles.suggestionIcon} />
                  <div className={styles.suggestionContent}>
                    <span className={styles.suggestionText}>{movie.title}</span>
                    {movie.year && (
                      <span className={styles.suggestionYear}>
                        ({movie.year})
                      </span>
                    )}
                  </div>
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
                aria-label="Limpiar todas las búsquedas"
              >
                <X size={16} />
              </button>
            </div>
            <div className={styles.tagContainer}>
              {recentSearches.slice(0, 8).map((item) => (
                <div key={item.id} className={styles.tagWrapper}>
                  <button
                    onClick={() => handleRecentSearchClick(item)}
                    className={styles.tag}
                  >
                    {item.title}
                  </button>
                  <button
                    onClick={() => removeRecentSearch(item.id)}
                    className={styles.removeTag}
                    aria-label={`Eliminar ${item.title}`}
                  >
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
            {popularMovies.map((movie, index) => (
              <button
                key={movie.id}
                onClick={() => {
                  saveToRecentSearches(movie.title);
                  if (onSelectItem) onSelectItem(movie);
                }}
                className={styles.movieItem}
              >
                <div className={styles.movieContent}>
                  <div className={styles.movieInfo}>
                    <span className={styles.movieTitle}>{movie.title}</span>
                  </div>
                  <span className={styles.movieRank}>#{index + 1}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {showSuggestions &&
        suggestions.length === 0 &&
        searchQuery.length >= 2 &&
        !isLoading && (
          <div className={styles.emptyState}>
            <Search size={48} className={styles.emptyIcon} />
            <h3 className={styles.emptyTitle}>No se encontraron resultados</h3>
            <p className={styles.emptyDescription}>
              Intenta con otros términos de búsqueda
            </p>
          </div>
        )}
    </div>
  );
};

export default SearchComponent;