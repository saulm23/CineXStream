import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: Request) {
  const { email, password } = await request.json();
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const exisistingUser = await db.user.findUnique({
      where: {
        email,
      },
    });
    if (exisistingUser) {
      return new NextResponse("Email ya registrado", { status: 400 });
    }
    const userCreated = await db.user.create({
      data: {
        email: email,
        password: hashedPassword,
      },
    });
    return NextResponse.json(userCreated);
  } catch (error) {
    console.log({ error });
    return new NextResponse("Error Interno", { status: 500 });
  }
}
