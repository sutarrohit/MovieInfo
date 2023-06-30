/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org", "www.fillmurray.com"], // TMDB image Domain
  },
};

module.exports = nextConfig;
