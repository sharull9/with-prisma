import { NextResponse } from "next/server";
import prisma from "@/prisma/client";

type data = {
  name: string;
};

export default async function GET(request: Request) {
  const data = await prisma.post.findMany();
  return NextResponse.json(data);
}
