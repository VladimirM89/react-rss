/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: `@import "src/styles/variables.scss";`,
 },
 images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'cdn.myanimelist.net',
      port: '',
      pathname: '/images/anime/**',
    },
  ],
},
}

export default nextConfig
