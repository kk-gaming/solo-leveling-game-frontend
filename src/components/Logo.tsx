"use client";
import Link from "next/link";
import { getBasePath } from "@/lib/asset";

export default function Logo() {
  const base = getBasePath();
  const src = `${base}/solo-logo.svg`;
  return (
    <Link href={`${base}/`}>
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

