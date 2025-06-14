import PagoClient from "./PagoClient";
import { db } from "@/lib/db";

type Params = {
  id: string;
};

const PagoPage = async ({ params }: { params: Params }) => {
  const movie = await db.movie.findUnique({
    where: { id: params.id },
    select: {
      id: true,
      title: true,
      thumbnailUrl: true,
    },
  });

  if (!movie) {
    return <p className="text-white p-6 text-center">Película no encontrada</p>;
  }

  return <PagoClient movie={movie} />;
};

export default PagoPage;
