"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";


const tabs = [
  { href: "/", label: "Dashboard", match: "root" as const },
  { href: "/log/", label: "Log", match: "log" as const },
  { href: "/history/", label: "History", match: "history" as const },
];

export default function NavTabs() {
  const pathname = usePathname();
  const currentPath = (typeof window !== "undefined" ? window.location.pathname : pathname) || "/";
  const normalized = currentPath.endsWith("/") ? currentPath : currentPath + "/";

  // Active detection that ignores a possible repo base prefix
  function isActive(match: "root" | "log" | "history") {
    if (match === "root") return /^(\/|\/[\w.-]+\/)$/i.test(normalized);
    return new RegExp(`(?:^|\/)${match}\/?$`, "i").test(normalized);
  }

  return (
    <nav className="space-x-4 text-sm">
      {tabs.map((t) => (
        <Link
          key={t.label}
          href={t.href}
          aria-current={isActive(t.match) ? "page" : undefined}
          className={`tab-link nav-link inline-block relative pb-1 ${isActive(t.match) ? "text-white" : ""}` }
        >
          {t.label}
        </Link>
      ))}
    </nav>
  );
}

