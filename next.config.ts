import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ML_Repo",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
