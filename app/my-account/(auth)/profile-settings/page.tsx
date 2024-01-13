import { useAuth } from "@/app/_lib";
import { SPAPostPage, Section } from "../_components";

export default function Page() {
  const isAuth = useAuth();

  if (isAuth) {
    return (
      <Section>
        <div>Page: profile settings</div>
        <SPAPostPage params={{ id: "1" }} />
      </Section>
    );
  }
  return <div>loading</div>;
}
