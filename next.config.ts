import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: "ap-south-1.graphassets.com" }],
  },
};

export default nextConfig;
