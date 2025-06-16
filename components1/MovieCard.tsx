import Link from "next/link";
import Image from "next/image";

type Movie = {
  id: string;
  title: string;
  thumbnailUrl: string;
};

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <Link href={`/movies/${movie.id}`}>
      <div className="block bg-zinc-900 rounded-md overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        <Image
          src={movie.thumbnailUrl}
          alt={movie.title}
          width={320}
          height={180}
          className="object-cover w-full h-44"
          unoptimized
        />
        <h3 className="text-white text-lg p-2">{movie.title}</h3>
      </div>
    </Link>
  );
};

export default MovieCard;
