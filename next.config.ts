import type { NextConfig } from "next";

// Derive repo name automatically on GitHub Actions; allow override via env
const derivedRepo = process.env.GITHUB_REPOSITORY?.split("/")[1];
const fallbackRepo = "solo-leveling-game-frontend";
const repo = (process.env.NEXT_PUBLIC_BASEPATH?.replace(/^\//, "") || derivedRepo || fallbackRepo);
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  ...(isGithubPages ? { basePath: `/${repo}` } : {}),
};

export default nextConfig;
