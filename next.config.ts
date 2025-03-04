import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      { hostname: "ap-south-1.graphassets.com" },
      { hostname: "img.clerk.com" },
    ],
  },
};

export default nextConfig;
