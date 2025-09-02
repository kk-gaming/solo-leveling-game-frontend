"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";


const tabs = [
  { href: "/", label: "Dashboard" },
  { href: "/log", label: "Log" },
  { href: "/history", label: "History" },
];

export default function NavTabs() {
  const pathname = usePathname();
  return (
    <nav className="space-x-4 text-sm">
      {tabs.map((t) => {
        const isActive = t.href === "/" ? pathname === "/" : pathname.startsWith(t.href);
        return (
          <Link
            key={t.href}
            href={t.href}
            aria-current={isActive ? "page" : undefined}
            className={`tab-link nav-link inline-block relative pb-1 ${isActive ? "text-white" : ""}` }
          >
            {t.label}
          </Link>
        );
      })}
    </nav>
  );
}

