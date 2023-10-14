/** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

const nextConfig = {
    output: 'export',
    images: {
      loader: 'custom',
      loaderFile: './my-loader.ts',
    },
  }
   
  module.exports = nextConfig
