import { LoginForm } from "./_components";

export default function Home() {
  return (
    <div className="min-h-screen p-2">
      <div className="grid gap-4">
        <h1 className="text-xl">Sign in</h1>
        <LoginForm />
      </div>
    </div>
  );
}
