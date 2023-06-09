import { NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET(request: Request) {
  const data = await prisma.post.findMany();
  console.log(data);
  return NextResponse.json(data);
}
