import TabsWrapper from './TabsWrapper';
import MovieBackground from '@/components1/MovieBackground';
import { db } from '@/lib/db';

type Params = {
  id: string;
};

const MoviePage = async ({ params }: { params: Params }) => {
  const movie = await db.movie.findUnique({
    where: { id: params.id },
    select: {
      id: true,
      title: true,
      thumbnailUrl: true,
      genre: true,
      age: true,
      duration: true,
      trailerVideo: true,
      movieVideo: true,
    },
  });

  if (!movie) {
    return <p className="text-white p-6 text-center">Película no encontrada</p>;
  }

  return (
    <div className="relative min-h-screen text-white flex flex-col">
      <MovieBackground src={movie.thumbnailUrl} alt={movie.title} />
      {/* Pass movie to client component for tabs */}
      <TabsWrapper movie={movie} />
    </div>
  );
};

export default MoviePage;
