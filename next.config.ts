import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Temporarily ignore ESLint errors during builds
    ignoreDuringBuilds: true,
  },
  /* config options here */
};

export default nextConfig;
