import { useAuth } from "@/app/_lib";

export default function Page() {
  const isAuth = useAuth();

  if (isAuth) {
    return <div>Page: profile settings</div>;
  }
  return <div>loading</div>;
}
