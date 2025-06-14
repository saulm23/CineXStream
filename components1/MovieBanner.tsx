import Image from 'next/image';
import { db } from '@/lib/db';

type MovieBannerProps = {
  id: string;
};

const MovieBanner = async ({ id }: MovieBannerProps) => {
  const movie = await db.movie.findUnique({
    where: { id },
    select: {
      title: true,
      genre: true,
      thumbnailUrl: true,
    },
  });

  if (!movie) {
    return <div className="text-white p-6 text-center">Película no encontrada</div>;
  }

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-6 text-center">
      <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg mb-4">
        <Image
          src={movie.thumbnailUrl}
          alt={movie.title}
          fill
          className="object-cover"
        />
      </div>

      <h1 className="text-3xl font-extrabold text-white mb-2">{movie.title}</h1>
      <p className="text-pink-400 text-lg font-medium">{movie.genre}</p>
    </div>
  );
};

export default MovieBanner;
