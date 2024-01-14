"use client";

import { useAuth } from "@/app/_lib";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

// This is not implemented yet. Today, you would still need to
// export function generateStaticParams() at build time.
// See https://github.com/vercel/next.js/issues/54393
export function SPAPage({ params }: { params: { id: string } }) {
  const { data, error, isLoading, isValidating } = useSWR(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    fetcher
  );

  if (error) {
    return (
      <Frame>
        <div>Failed to load</div>
      </Frame>
    );
  }

  if (isLoading) {
    return (
      <Frame>
        <div>Loading...</div>
      </Frame>
    );
  }

  return (
    <Frame>
      <span>
        dynamic client data, stale-while-revalidate (
        <a href="https://swr.vercel.app/ ">link ⤴️</a>)
      </span>
      <p>id: {data.id}</p>
      <p>userId: {data.userId}</p>
      <div>title: {data.title}</div>
      <p>body: {data.body}</p>
    </Frame>
  );
}

const Frame = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ border: "1px dotted orange", padding: "0.5rem" }}>
      {children}
    </div>
  );
};

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

export const Dashboard = () => {
  return (
    <Section>
      <div>Page: dashboard</div>
      <SPAPage params={{ id: "10" }} />
      <SPAPage params={{ id: "11" }} />
      <SPAPage params={{ id: "12" }} />
    </Section>
  );
};

export const Profile = () => {
  return (
    <Section>
      <div>Page: profile</div>
      <SPAPage params={{ id: "3" }} />
      <SPAPage params={{ id: "2" }} />
    </Section>
  );
};
