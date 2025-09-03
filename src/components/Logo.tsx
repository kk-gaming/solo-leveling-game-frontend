"use client";
import Link from "next/link";
export default function Logo() {
  return (
    <Link href="/">
      <img
        src="solo-logo.svg"
        alt="Solo Leveling"
        width={24}
        height={24}
        className="w-6 h-6 drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]"
      />
    </Link>
  );
}

