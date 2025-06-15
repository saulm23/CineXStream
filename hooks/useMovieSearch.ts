'use client';

import { useState, useEffect, useRef } from 'react';

export interface Movie {
  id: string;
  title: string;
  year?: string;
  genre?: string;
  poster?: string;
  rating?: number;
  description?: string;
}

export interface SearchItem {
  id: string;
  title: string;
}

export const useMovieSearch = (apiUrl?: string) => {
  const [suggestions, setSuggestions] = useState<Movie[]>([]);
  const [recentSearches, setRecentSearches] = useState<SearchItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const mockMovies: Movie[] = [
    {
      id: '1',
      title: 'Avengers: Infinity War',
      year: '2018',
      genre: 'Acción',
      rating: 8.4,
      description: 'Los Vengadores se unen para detener a Thanos.',
      poster: 'https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg',
    },
    {
      id: '2',
      title: 'Guardians of the Galaxy',
      year: '2014',
      genre: 'Acción',
      rating: 8.0,
      description: 'Un grupo de inadaptados protege la galaxia.',
      poster: 'https://m.media-amazon.com/images/I/91xN8KRi1fL._AC_SL1500_.jpg',
    },
    {
      id: '3',
      title: 'Fantastic Four',
      year: '2015',
      genre: 'Acción',
      rating: 4.3,
      description: 'Un equipo de superhéroes con poderes únicos.',
      poster: 'https://m.media-amazon.com/images/I/91fqxrWx7gL._AC_SL1500_.jpg',
    },
    {
      id: '4',
      title: 'Doctor Strange',
      year: '2016',
      genre: 'Acción',
      rating: 7.5,
      description: 'Un cirujano se convierte en mago para salvar el mundo.',
      poster: 'https://m.media-amazon.com/images/I/91IMkIz4z-L._AC_SY679_.jpg',
    },
    {
      id: '5',
      title: 'Spider-Man: No Way Home',
      year: '2021',
      genre: 'Acción',
      rating: 8.2,
      description: 'Spider-Man enfrenta múltiples versiones de sí mismo.',
      poster: 'https://m.media-amazon.com/images/I/71xBLRBYOiL._AC_SL1000_.jpg',
    },
    {
      id: '6',
      title: 'Spider-Man: Across the Spider-Verse',
      year: '2023',
      genre: 'Animación',
      rating: 8.7,
      description: 'Una aventura animada en múltiples universos de Spider-Man.',
      poster: 'https://m.media-amazon.com/images/I/71g40mlbinL._AC_SL1024_.jpg',
    },
    {
      id: '7',
      title: 'Avatar',
      year: '2009',
      genre: 'Ciencia Ficción',
      rating: 7.9,
      description: 'Un soldado en un mundo alienígena lucha por sobrevivir.',
      poster: 'https://m.media-amazon.com/images/I/41kTVLeW1CL._AC_.jpg',
    },
    {
      id: '8',
      title: 'Avatar: The Way of Water',
      year: '2022',
      genre: 'Ciencia Ficción',
      rating: 7.6,
      description: 'La continuación épica de la aventura en Pandora.',
      poster: 'https://m.media-amazon.com/images/I/51G8gTSL+BL._AC_.jpg',
    },
    {
      id: '9',
      title: 'Top Gun: Maverick',
      year: '2022',
      genre: 'Acción',
      rating: 8.3,
      description: 'El regreso del piloto Maverick en misiones arriesgadas.',
      poster: 'https://m.media-amazon.com/images/I/81zEwcmnSIL._AC_SY679_.jpg',
    },
    {
      id: '10',
      title: 'Interstellar',
      year: '2014',
      genre: 'Ciencia Ficción',
      rating: 8.6,
      description: 'Una misión espacial para salvar a la humanidad.',
      poster: 'https://m.media-amazon.com/images/I/71y7ZWY+d4L._AC_SY679_.jpg',
    },
    {
      id: '11',
      title: 'The Dark Knight',
      year: '2008',
      genre: 'Acción',
      rating: 9.0,
      description: 'Batman enfrenta al Joker en Gotham City.',
      poster: 'https://m.media-amazon.com/images/I/51EbJjlLg9L._AC_.jpg',
    },
    {
      id: '12',
      title: 'Inception',
      year: '2010',
      genre: 'Ciencia Ficción',
      rating: 8.8,
      description: 'Un equipo roba secretos dentro de los sueños.',
      poster: 'https://m.media-amazon.com/images/I/51k0qa6zY-L._AC_.jpg',
    },
    {
      id: '13',
      title: 'Deadpool',
      year: '2016',
      genre: 'Acción',
      rating: 8.0,
      description: 'Un antihéroe con sentido del humor ácido.',
      poster: 'https://m.media-amazon.com/images/I/81nC6vNAzCL._AC_SY679_.jpg',
    },
    {
      id: '14',
      title: 'Wonder Woman',
      year: '2017',
      genre: 'Acción',
      rating: 7.4,
      description: 'La historia de la heroína amazona Diana.',
      poster: 'https://m.media-amazon.com/images/I/81D+KJkO9-L._AC_SY679_.jpg',
    },
    {
      id: '15',
      title: 'Black Panther',
      year: '2018',
      genre: 'Acción',
      rating: 7.3,
      description: 'El rey de Wakanda protege su nación y el mundo.',
      poster: 'https://m.media-amazon.com/images/I/81KJek8UQfL._AC_SY679_.jpg',
    },
  ];

  const searchMovies = async (query: string): Promise<Movie[]> => {
    if (query.length < 2) {
      setSuggestions([]);
      return [];
    }

    setIsLoading(true);
    try {
      if (apiUrl) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);

        try {
          const res = await fetch(`${apiUrl}?search=${encodeURIComponent(query)}`, { 
            signal: controller.signal 
          });
          clearTimeout(timeoutId);

          if (!res.ok) throw new Error(`Error HTTP ${res.status}`);

          const movies: Movie[] = await res.json();

          const filtered = movies
            .filter(m =>
              m.title.toLowerCase().includes(query.toLowerCase()) ||
              (m.description?.toLowerCase().includes(query.toLowerCase()) ?? false)
            )
            .slice(0, 6);

          setSuggestions(filtered);
          return filtered;
        } catch {
          // Fallback to mock data
        }
      }

      // Use mock data
      const filteredMock = mockMovies
        .filter(m =>
          m.title.toLowerCase().includes(query.toLowerCase()) ||
          (m.description?.toLowerCase().includes(query.toLowerCase()) ?? false)
        )
        .slice(0, 6);

      setSuggestions(filteredMock);
      return filteredMock;
    } finally {
      setIsLoading(false);
    }
  };

  const debouncedSearch = (query: string, delay = 300) => {
    if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
    searchTimeoutRef.current = setTimeout(() => {
      searchMovies(query);
    }, delay);
  };

  const saveToRecentSearches = (searchTerm: string) => {
    if (!searchTerm.trim()) return;

    const newSearch: SearchItem = { 
      id: Date.now().toString(), 
      title: searchTerm.trim() 
    };

    const updated = [
      newSearch, 
      ...recentSearches.filter(s => 
        s.title.toLowerCase() !== searchTerm.toLowerCase()
      )
    ].slice(0, 10);
    
    setRecentSearches(updated);
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
  };

  const removeRecentSearch = (id: string) => {
    const updated = recentSearches.filter(s => s.id !== id);
    setRecentSearches(updated);
  };

  useEffect(() => {
    return () => {
      if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
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
    setSuggestions,
  };
};