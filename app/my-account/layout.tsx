import Link from "next/link";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* Include shared UI here e.g. a header or sidebar */}
      <div style={{ padding: "0.5rem" }}>
        <details style={{ cursor: "pointer" }}>
          <summary>Nav</summary>
          <nav>
            <ul>
              <li>
                <Link href="/">home →</Link>
              </li>
              <li>
                <Link href="/my-account/dashboard">dashboard →</Link>
              </li>
              <li>
                <Link href="/my-account/profile-settings">
                  profile settings →
                </Link>
              </li>
            </ul>
          </nav>
        </details>
      </div>
      <div style={{ display: "grid", padding: "0.5rem" }}>{children}</div>
    </div>
  );
}
