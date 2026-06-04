import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.NODE_ENV === "production" ? "/sde-portfolio" : "",
  pageExtensions: ["ts", "tsx", "mdx"],
  images: {
    unoptimized: true, // required for static export
  },
};

export default nextConfig;
