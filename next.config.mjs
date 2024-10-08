/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com", "github.com", "lh3.googleusercontent.com", "images.unsplash.com"]
  }
}

export default nextConfig;
