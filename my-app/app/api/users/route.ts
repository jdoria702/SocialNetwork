import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const users = await prisma.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      name: true,
      username: true,
      email: true,
      bio: true,
      createdAt: true,
    },
  });

  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json(
      { error: "Request body must be valid JSON." },
      { status: 400 },
    );
  }

  const { name, username, email, password, bio } = body as {
    name?: string;
    username?: string;
    email?: string;
    password?: string;
    bio?: string;
  };

  if (!username || !email || !password) {
    return NextResponse.json(
      { error: "username, email, and password are required." },
      { status: 400 },
    );
  }

  const user = await prisma.user.create({
    data: {
      name: name?.trim() || null,
      username: username.trim(),
      email: email.trim().toLowerCase(),
      password,
      bio: bio?.trim() || null,
    },
    select: {
      id: true,
      name: true,
      username: true,
      email: true,
      bio: true,
      createdAt: true,
    },
  });

  return NextResponse.json(user);
}