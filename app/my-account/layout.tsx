import Link from "next/link";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const isAuthenticated = false;
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>
        <ul>
          <li>
            <Link href="/my-account/dashboard">dashboard</Link>
          </li>
          <li>
            <Link href="/my-account/profile-settings">profile settings</Link>
          </li>
        </ul>
      </nav>
      {children}
    </section>
  );
}
