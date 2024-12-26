import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;