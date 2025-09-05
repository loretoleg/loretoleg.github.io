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
  env: {
    NEXT_PUBLIC_LAMBDA_URL: process.env.NEXT_PUBLIC_LAMBDA_URL,
  },
  // For a root deployment like https://loretoleg.github.io/,
  // assetPrefix and basePath should be empty or not set.
  // assetPrefix: '',
  // basePath: '',
}

export default nextConfig
