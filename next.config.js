/** @type {import('next').NextConfig} */

const nextTranslate = require("next-translate-plugin");

const nextConfig = nextTranslate({
  images: {
    domains: ["img.youtube.com", "images.unsplash.com"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
});

module.exports = nextConfig;
