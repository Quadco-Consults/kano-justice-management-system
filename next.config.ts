import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "cdn.pixabay.com",
      "img.freepik.com",
      "images.unsplash.com",
      "cataloguemanagement.s3.us-east-005.backblazeb2.com",
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "standalone",
  swcMinify: false, // This can help bypass some build issues
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "./src"),
    };
    return config;
  },
} as NextConfig;

export default nextConfig;
