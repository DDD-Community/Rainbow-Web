/** @type {import('next').NextConfig} */

const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    esmExternals: "loose"
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://apis.buybye.kr:8080/:path*"
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
