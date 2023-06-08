import prisma from "@/prisma/client";
import Image from "next/image";

// async function getPosts() {
//   const res = await fetch(`${process.env.BASE_URL}/api/post`);

//   return res.json();
// }
async function getPost() {
  const posts = await prisma.post.findMany();
  return posts;
}

export default async function Home() {
  // const data = await getPosts();
  const data1 = await getPost();
  console.log(data1);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
