import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Permite servir el logo .svg a través de next/image
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
  },
};

export default nextConfig;
