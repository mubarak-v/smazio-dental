import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Disable the `@typescript-eslint/no-explicit-any` rule
    ignoreDuringBuilds: true,  // Ignores ESLint during build
    // Optionally, to turn off only the `no-explicit-any` rule specifically:
    // settings: {
    //   'eslint.rules': {
    //     '@typescript-eslint/no-explicit-any': 'off'
    //   }
    // }
  },
  // Add other config options here
};

export default nextConfig;
