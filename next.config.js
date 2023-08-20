/** @type {import('next').NextConfig} */

const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  reactStrictMode: false,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/auth/kakao",
        destination: "http://43.201.219.27:8080/auth/kakao"
      }
    ];
  }
};

module.exports = nextConfig;
