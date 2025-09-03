type BgInfo = { url: string; creditText?: string; creditHref?: string };

export const CURATED_BG: BgInfo[] = [
  // Dark, dungeon-like, royalty-free images (Pexels)
  { url: "https://images.pexels.com/photos/1616402/pexels-photo-1616402.jpeg?auto=compress&cs=tinysrgb&w=1600", creditText: "Image: Pexels", creditHref: "https://www.pexels.com/" },
  { url: "https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1600", creditText: "Image: Pexels", creditHref: "https://www.pexels.com/" },
  { url: "https://images.pexels.com/photos/33545/blue-ice-cave-iceland-cave-ice.jpg?auto=compress&cs=tinysrgb&w=1600", creditText: "Image: Pexels", creditHref: "https://www.pexels.com/" },
  { url: "https://images.pexels.com/photos/5703129/pexels-photo-5703129.jpeg?auto=compress&cs=tinysrgb&w=1600", creditText: "Image: Pexels", creditHref: "https://www.pexels.com/" },
  { url: "https://images.pexels.com/photos/1135713/pexels-photo-1135713.jpeg?auto=compress&cs=tinysrgb&w=1600", creditText: "Image: Pexels", creditHref: "https://www.pexels.com/" },
];

export const ROUTE_BACKGROUNDS: Record<string, BgInfo[]> = {
  "/": CURATED_BG,
  "/log": [
    { url: "https://images.pexels.com/photos/5703129/pexels-photo-5703129.jpeg?auto=compress&cs=tinysrgb&w=1600", creditText: "Image: Pexels", creditHref: "https://www.pexels.com/" },
    { url: "https://images.pexels.com/photos/1135713/pexels-photo-1135713.jpeg?auto=compress&cs=tinysrgb&w=1600", creditText: "Image: Pexels", creditHref: "https://www.pexels.com/" },
  ],
  "/history": [
    { url: "https://images.pexels.com/photos/1616402/pexels-photo-1616402.jpeg?auto=compress&cs=tinysrgb&w=1600", creditText: "Image: Pexels", creditHref: "https://www.pexels.com/" },
    { url: "https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1600", creditText: "Image: Pexels", creditHref: "https://www.pexels.com/" },
  ],
};

function hashString(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h << 5) - h + s.charCodeAt(i);
    h |= 0;
  }
  return h;
}

export function getHeroBackgroundInfo(pathname?: string): BgInfo {
  const fromEnv = process.env.NEXT_PUBLIC_BG_URL;
  if (fromEnv && fromEnv.trim().length > 0) return { url: fromEnv };
  let key = pathname || "/";
  if (typeof window !== "undefined" && !pathname) {
    key = window.location.pathname || "/";
  }
  const group = ROUTE_BACKGROUNDS[key] || CURATED_BG;
  const idx = Math.abs(hashString(key)) % group.length;
  return group[idx];
}

// Backward compat for older imports
export function getHeroBackgroundUrl(pathname?: string): string {
  return getHeroBackgroundInfo(pathname).url;
}

