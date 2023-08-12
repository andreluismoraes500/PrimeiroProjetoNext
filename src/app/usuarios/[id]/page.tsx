type User = {
  id: number;
  name: string;
  username: string;
};

async function getData(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page({ params }: any) {
  const data: User = await getData(params.id);

  return (
    <main>
      <p>ID: {data.id}</p>
      <p>Name: {data.name}</p>
      <p>UserName: {data.username}</p>
    </main>
  );
}
