/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'workspace-registry',
    description: 'store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://officialmofabs.github.io/kasm-registry/',
    contactUrl: 'https://github.com/officialmofabs',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
