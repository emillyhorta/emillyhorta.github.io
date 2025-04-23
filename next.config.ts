import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

module.exports = {
  output: "export",
  basePath: "",
  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
