import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-black text-white p-4 flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/settings">Settings</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/health">Health</Link>
        </nav>

        {children}
      </body>
    </html>
  );
}