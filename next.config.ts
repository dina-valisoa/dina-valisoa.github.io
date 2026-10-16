import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export for GitHub Pages (served at https://dina-valisoa.me)
  output: "export",
  trailingSlash: true,
  pageExtensions:["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    unoptimized: true,
  },
};
const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
