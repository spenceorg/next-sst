import { useAuth } from "@/app/_lib";
import { Card, Section } from "./_components";

export default function Page() {
  const isAuth = useAuth();

  if (isAuth) {
    return (
      <Section>
        {[
          { title: "hello", description: "worlf" },
          { title: "hullo", description: "worlf" },
          { title: "hurlop", description: "worlf" },
        ].map((props, i) => {
          return <Card key={i} {...props} />;
        })}
      </Section>
    );
  }
  return <div>loading</div>;
}
