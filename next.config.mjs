/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/loretoleg.github.io' : '', // Remove or ensure it's empty for root deployment
  // basePath: process.env.NODE_ENV === 'production' ? '/loretoleg.github.io' : '', // Remove or ensure it's empty for root deployment
}

export default nextConfig
