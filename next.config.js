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
  },
  webpack: config => {
    // SVG 파일에 @svgr/webpack 로더 추가
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    return config;
  }
};

module.exports = nextConfig;
