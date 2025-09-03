export function withBasePath(path: string): string {
  const cleaned = path.startsWith("/") ? path : `/${path}`;
  const base = process.env.NEXT_PUBLIC_BASEPATH?.replace(/^\/+/, "") || "";
  return base ? `/${base}${cleaned}` : cleaned;
}

