import MovieCard from '../moleculas/MovieCard';

export default function MovieSection() {
  return (
    <div className="px-4 mt-6">
      <h3 className="text-lg font-semibold mb-2">Películas</h3>
      <div className="flex space-x-4 overflow-x-auto">
        <MovieCard title="Spider-Man" subtitle="Across the Spider-Verse" isNew />
        <MovieCard title="Doctor Strange" subtitle="in the Multiverse of Madness" />
      </div>
    </div>
  );
}
