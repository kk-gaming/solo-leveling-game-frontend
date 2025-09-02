import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Solo Leveling: IRL Stats",
  description: "Log your daily activities and watch your stats level up.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="border-b">
          <div className="max-w-5xl mx-auto p-4 flex items-center justify-between">
            <h1 className="font-semibold">Solo Leveling: IRL</h1>
            <nav className="space-x-4 text-sm">
              <Link className="hover:underline" href="/">Dashboard</Link>
              <Link className="hover:underline" href="/log">Log</Link>
              <Link className="hover:underline" href="/history">History</Link>
            </nav>
          </div>
        </header>
        <main className="min-h-[calc(100vh-64px)]">
          {children}
        </main>
        <footer className="border-t">
          <div className="max-w-5xl mx-auto p-4 text-xs text-gray-600">
            Built with Next.js + Tailwind
          </div>
        </footer>
      </body>
    </html>
  );
}
