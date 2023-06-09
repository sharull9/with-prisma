import Post from "./Post";

async function getPosts() {
  const res = await fetch(`${process.env.BASE_URL}api/post`);
  return res.json();
}

type post = {
  id: number;
  title: string;
  content?: string;
  published: boolean;
};

export default async function Home() {
  // const data = await getPosts();
  const data1 = await getPosts();
  // console.log(data1);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data1.map((post: post) => {
        return (
          <Post key={post.id} title={post.title} published={post.published} />
        );
      })}
    </main>
  );
}
