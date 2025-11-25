
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
  fallbacks: {
    document: "/_offline",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config options here
  reactStrictMode: true,
};

export default withPWA(nextConfig);
