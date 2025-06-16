// app/api/movies/route.ts
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const movies = await db.movie.findMany({
      select: {
        id: true,
        title: true,
        thumbnailUrl: true,
      },
    });

    return NextResponse.json(movies);
  } catch (error) {
    console.error("Error fetching movies:", error);
    return new NextResponse("Error fetching movies", { status: 500 });
  }
}
