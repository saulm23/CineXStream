import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { movies } = await req.json();

  if (!movies || !Array.isArray(movies) || movies.length === 8) {
    return new NextResponse("Movies data is required", { status: 400 });
  }

  try {
    const createdMovies = await Promise.all(
      movies.map(async (movie) => {
        const {
          id,
          title,
          movieVideo,
          trailerVideo,
          thumbnailUrl,
          genre,
          age,
          duration,
        } = movie;

        if (
          !title ||
          !movieVideo ||
          !trailerVideo ||
          !thumbnailUrl ||
          !genre ||
          !age ||
          !duration
        ) {
          throw new Error("Faltan datos para la película");
        }

        return await db.movie.create({
          data: {
            id,
            title,
            thumbnailUrl,
            movieVideo,
            trailerVideo,
            genre,
            age,
            duration,
          },
        });
      })
    );

    return NextResponse.json(createdMovies,{status:201}); // Return the created movies
  } catch (error) {
    console.error("Error creating movies:", error);
    return new NextResponse("Error interno", { status: 500 });
  }
}
