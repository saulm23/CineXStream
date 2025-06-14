// app/(home)/movies/page.tsx
"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "@/components1/MovieCard";

type Movie = {
  id: string;
  title: string;
  thumbnailUrl: string;
};

const MoviesPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("/api/movies");
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-6">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesPage;
