export function withBasePath(path: string): string {
  const cleaned = path.startsWith("/") ? path : `/${path}`;
  const base = process.env.NEXT_PUBLIC_BASEPATH?.replace(/^\/+/, "") || "";
  return base ? `/${base}${cleaned}` : cleaned;
}


export function getBasePath(): string {
  const forced = process.env.NEXT_PUBLIC_BASEPATH?.replace(/^\/+/, "");
  if (forced) return `/${forced}`;
  if (typeof window !== "undefined") {
    const host = window.location.hostname.toLowerCase();
    const parts = window.location.pathname.split("/").filter(Boolean);
    if (host.endsWith("github.io") && parts.length) return `/${parts[0]}`;
    return "";
  }
  return "";
}
