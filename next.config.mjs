/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // skipTrailingSlashRedirect: true, // Often not needed for static export with trailingSlash
  // distDir: 'dist', // Remove this to use the default 'out' directory
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  // For a root deployment like https://loretoleg.github.io/,
  // assetPrefix and basePath should be empty or not set.
  // assetPrefix: '',
  // basePath: '',
}

export default nextConfig
