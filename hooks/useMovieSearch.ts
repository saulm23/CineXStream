'use client';

import { useState, useEffect, useRef } from 'react';

export interface Movie {
  id: string;
  title: string;
  year?: string;
  genre?: string;
  poster?: string;
  rating?: number;
}

export interface SearchItem {
  id: string;
  title: string;
}

export const useMovieSearch = (apiUrl?: string) => {
  const [suggestions, setSuggestions] = useState<Movie[]>([]);
  const [recentSearches, setRecentSearches] = useState<SearchItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Datos de respaldo para cuando la API no funcione
  const mockMovies: Movie[] = [
    { id: '1', title: 'Avengers: Infinity War', year: '2018', genre: 'Acción', rating: 8.4 },
    { id: '2', title: 'Guardians of the Galaxy', year: '2014', genre: 'Acción', rating: 8.0 },
    { id: '3', title: 'Fantastic Four', year: '2015', genre: 'Acción', rating: 4.3 },
    { id: '4', title: 'Doctor Strange', year: '2016', genre: 'Acción', rating: 7.5 },
    { id: '5', title: 'Spider-Man: No Way Home', year: '2021', genre: 'Acción', rating: 8.2 },
    { id: '6', title: 'Spider-Man: Across the Spider-Verse', year: '2023', genre: 'Animación', rating: 8.7 },
    { id: '7', title: 'Avatar', year: '2009', genre: 'Ciencia Ficción', rating: 7.9 },
    { id: '8', title: 'Avatar: The Way of Water', year: '2022', genre: 'Ciencia Ficción', rating: 7.6 },
    { id: '9', title: 'Top Gun: Maverick', year: '2022', genre: 'Acción', rating: 8.3 },
    { id: '10', title: 'Interstellar', year: '2014', genre: 'Ciencia Ficción', rating: 8.6 },
    { id: '11', title: 'The Dark Knight', year: '2008', genre: 'Acción', rating: 9.0 },
    { id: '12', title: 'Inception', year: '2010', genre: 'Ciencia Ficción', rating: 8.8 },
    { id: '13', title: 'Deadpool', year: '2016', genre: 'Acción', rating: 8.0 },
    { id: '14', title: 'Wonder Woman', year: '2017', genre: 'Acción', rating: 7.4 },
    { id: '15', title: 'Black Panther', year: '2018', genre: 'Acción', rating: 7.3 }
  ];

  // Cargar búsquedas recientes del localStorage (solo en el cliente)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedSearches = localStorage.getItem('cinestream_recent_searches');
      if (savedSearches) {
        try {
          setRecentSearches(JSON.parse(savedSearches));
        } catch (error) {
          console.error('Error al cargar búsquedas recientes:', error);
        }
      }
    }
  }, []);

  // Función para buscar películas
  const searchMovies = async (query: string): Promise<Movie[]> => {
    if (query.length < 2) {
      setSuggestions([]);
      return [];
    }

    setIsLoading(true);
    
    try {
      // Si hay una URL de API personalizada, intentar usarla
      if (apiUrl) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // Timeout de 5 segundos

        try {
          const response = await fetch(`${apiUrl}?search=${encodeURIComponent(query)}`, {
            signal: controller.signal,
            headers: {
              'Content-Type': 'application/json',
            },
          });
          
          clearTimeout(timeoutId);

          if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
          }
          
          const movies: Movie[] = await response.json();
          
          // Filtrar y limitar resultados de la API
          const filteredMovies = movies
            .filter(movie => 
              movie.title?.toLowerCase().includes(query.toLowerCase())
            )
            .slice(0, 6);
          
          setSuggestions(filteredMovies);
          return filteredMovies;
          
        } catch (apiError) {
          console.warn('API no disponible, usando datos de respaldo:', apiError);
          // Continuar con los datos de respaldo
        }
      }

      // Buscar en los datos de respaldo
      const filteredMockMovies = mockMovies
        .filter(movie => 
          movie.title.toLowerCase().includes(query.toLowerCase())
        )
        .slice(0, 6);
      
      setSuggestions(filteredMockMovies);
      return filteredMockMovies;
      
    } catch (error) {
      console.error('Error en la búsqueda:', error);
      
      // Como último recurso, usar datos de respaldo filtrados
      const fallbackResults = mockMovies
        .filter(movie => 
          movie.title.toLowerCase().includes(query.toLowerCase())
        )
        .slice(0, 6);
      
      setSuggestions(fallbackResults);
      return fallbackResults;
    } finally {
      setIsLoading(false);
    }
  };

  // Búsqueda con debounce
  const debouncedSearch = (query: string, delay: number = 300) => {
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    searchTimeoutRef.current = setTimeout(() => {
      searchMovies(query);
    }, delay);
  };

  // Guardar búsqueda en historial
  const saveToRecentSearches = (searchTerm: string) => {
    if (!searchTerm.trim() || typeof window === 'undefined') return;

    const newSearch: SearchItem = {
      id: Date.now().toString(),
      title: searchTerm.trim()
    };

    const updatedSearches = [
      newSearch,
      ...recentSearches.filter(search => 
        search.title.toLowerCase() !== searchTerm.toLowerCase()
      )
    ].slice(0, 10); // Mantener últimas 10 búsquedas

    setRecentSearches(updatedSearches);
    
    try {
      localStorage.setItem('cinestream_recent_searches', JSON.stringify(updatedSearches));
    } catch (error) {
      console.error('Error al guardar búsquedas recientes:', error);
    }
  };

  // Limpiar búsquedas recientes
  const clearRecentSearches = () => {
    setRecentSearches([]);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('cinestream_recent_searches');
    }
  };

  // Eliminar una búsqueda específica
  const removeRecentSearch = (searchId: string) => {
    const updatedSearches = recentSearches.filter(search => search.id !== searchId);
    setRecentSearches(updatedSearches);
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('cinestream_recent_searches', JSON.stringify(updatedSearches));
    }
  };

  // Limpiar timeout al desmontar
  useEffect(() => {
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, []);

  return {
    suggestions,
    recentSearches,
    isLoading,
    searchMovies,
    debouncedSearch,
    saveToRecentSearches,
    clearRecentSearches,
    removeRecentSearch,
    setSuggestions
  };
};