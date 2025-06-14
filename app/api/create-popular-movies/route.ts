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
          
          title,
          movieVideo,
          trailerVideo,
          thumbnailUrl,
          genre,
          age,
          duration,
          ranking,
        } = movie;

        if (
        
          !title ||
          !movieVideo ||
          !trailerVideo ||
          !thumbnailUrl ||
          !genre ||
          !age ||
          !duration||
          !ranking
        ) {
          throw new Error("Faltan datos para la película");
        }

        return await db.popularMovie.create({
          data: {
            title,
            thumbnailUrl,
            movieVideo,
            trailerVideo,
            genre,
            age,
            duration,
            ranking,
          },
        });
      })
    );

    return NextResponse.json(createdMovies,{status:201}); 
  } catch (error) {
    console.error("Error creating movies:", error);
    return new NextResponse("Error interno", { status: 500 });
  }
}
