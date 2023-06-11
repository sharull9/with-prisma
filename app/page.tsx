import Card from "./Card";

async function getPosts() {
  const res = await fetch(`/api/post`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

type post = {
  id: number;
  title: string;
  content?: string | null;
  published: boolean;
};

export default async function Home() {
  const data = await getPosts();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data.map((post: post) => {
        return <Card key={post.id} title={post.title} />;
      })}
    </main>
  );
}
