import { Dashboard } from "../_components";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/6", {
    next: { revalidate: 3600 },
  });

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <div>
      <div style={{ border: "1px dotted gray" }}>
        <div>
          <span>
            prerendered cache with 3600 second (1 hour) revalidate lifetime (
            <a href="https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#time-based-revalidation">
              link ⤴️
            </a>
            )
          </span>
        </div>
        <p>id: {data.id}</p>
        <p>userId: {data.userId}</p>
        <h1 className="text-2xl font-bold">title: {data.title}</h1>
        <p className="text-gray-500">body: {data.body}</p>
      </div>
      <Dashboard />
    </div>
  );
}
