"use client";
import Link from "next/link";

function computeBasePath(): string {
  if (typeof window === "undefined") {
    const forced = process.env.NEXT_PUBLIC_BASEPATH?.replace(/^\/+/, "");
    return forced ? `/${forced}` : "";
  }
  const forced = process.env.NEXT_PUBLIC_BASEPATH?.replace(/^\/+/, "");
  if (forced) return `/${forced}`;
  const host = window.location.hostname.toLowerCase();
  const parts = window.location.pathname.split("/").filter(Boolean);
  // On GitHub Pages: https://<user>.github.io/<repo>/...
  if (host.endsWith("github.io") && parts.length) {
    return `/${parts[0]}`;
  }
  return "";
}

export default function Logo() {
  const base = computeBasePath();
  const src = `${base}/solo-logo.svg`;
  return (
    <Link href="/">
      {/* Use a plain img to avoid any basePath quirks */}
      <img
        src={src}
        alt="Solo Leveling"
        width={24}
        height={24}
        className="w-6 h-6 drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]"
      />
    </Link>
  );
}

