import type { NextConfig } from "next";

// Derive repo name automatically on GitHub Actions; allow override via env
const derivedRepo = process.env.GITHUB_REPOSITORY?.split("/")[1];
const fallbackRepo = "solo-leveling-game-frontend";
const forcedBase = process.env.NEXT_PUBLIC_BASEPATH?.replace(/^\//, "");
const repo = forcedBase || derivedRepo || fallbackRepo;
const isGithubPages = process.env.GITHUB_PAGES === "true";
const isProd = process.env.NODE_ENV === "production";

// Enable basePath for production GitHub Pages or when NEXT_PUBLIC_BASEPATH is provided
const basePath = (isGithubPages || forcedBase) ? `/${repo}` : undefined;

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
};

export default nextConfig;
