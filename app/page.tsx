"use client";
import { useEffect, useState } from "react";
import Card from "./Card";

// async function getPosts() {
//   const res = await fetch(`http://localhost:3000/api/post`, {
//     cache: "no-store",
//   });
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// }

type post = {
  id: number;
  title: string;
  content?: string | null;
  published: boolean;
};

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/post`)
      .then((response) => response.json())
      .then((data) => setData(data));
    console.log(data);
  }, []);
  // const data = await getPosts();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data.map((post: post) => {
        return <Card key={post.id} title={post.title} />;
      })}
    </main>
  );
}
