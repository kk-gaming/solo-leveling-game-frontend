import type { NextConfig } from "next";

const repo = "solo-leveling-game";
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  ...(isGithubPages ? { basePath: `/${repo}` } : {}),
};

export default nextConfig;
