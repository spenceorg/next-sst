"use client";

import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

// This is not implemented yet. Today, you would still need to
// export function generateStaticParams() at build time.
// See https://github.com/vercel/next.js/issues/54393
export function SPAPostPage({ params }: { params: { id: string } }) {
  const { data, error } = useSWR(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    fetcher
  );
  if (error) return <h1 className="text-2xl font-bold">Failed to load</h1>;
  if (!data) return <h1 className="text-2xl font-bold">Loading...</h1>;

  return (
    <>
      <h1 className="text-2xl font-bold">{data.title}</h1>
      <p className="text-gray-500">{data.body}</p>
    </>
  );
}

export const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "0.5rem",
      }}
    >
      {children}
    </section>
  );
};

export const Card = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div
      style={{
        borderRadius: "10px",
        boxShadow: "1px 1px 5px black",
        background: "white",
        padding: "1rem",
      }}
    >
      <div style={{ color: "orange", fontSize: "18px" }}>
        <strong>{title}</strong>
      </div>
      <p style={{ color: "black", fontSize: "14px" }}>{description}</p>
    </div>
  );
};
