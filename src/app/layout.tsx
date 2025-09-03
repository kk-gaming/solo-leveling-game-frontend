import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import NavTabs from "@/components/NavTabs";
import RouteProgress from "@/components/RouteProgress";
import "./globals.css";
import { withBasePath } from "@/lib/asset";


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
      <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="border-b sl-hero">
          <div className="max-w-5xl mx-auto p-4 flex items-center justify-between sl-glass rounded-lg mt-4 relative z-10">
            <div className="flex items-center gap-2">
              <Link href="/"><Image src={withBasePath("/solo-logo.svg")} alt="Solo Leveling" width={24} height={24} priority className="drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]" /></Link>
              <h1 className="font-semibold sl-gradient-text">Solo Leveling: IRL</h1>
            </div>
            <NavTabs />
          </div>
            <RouteProgress />
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
