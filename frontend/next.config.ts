import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  pageExtensions: ["ts", "tsx", "mdx"],
  images: {
    unoptimized: true, // required for static export
  },
};

export default nextConfig;
