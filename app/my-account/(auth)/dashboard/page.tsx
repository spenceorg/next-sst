import { useAuth } from "@/app/_lib";
import { Card, Section, SPAPostPage } from "../_components";

export default function Page() {
  const isAuth = useAuth();

  if (isAuth) {
    return (
      <Section>
        <div>Page: dashboard</div>
        {[
          { title: "hello", description: "worlf" },
          { title: "hullo", description: "worlf" },
          { title: "hurlop", description: "worlf" },
        ].map((props, i) => {
          return <Card key={i} {...props} />;
        })}
        <SPAPostPage params={{ id: "12" }} />
      </Section>
    );
  }
  return <div>loading</div>;
}
