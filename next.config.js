/** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

// const nextConfig = {
//     output: 'export',
//     images: {
//       loader: 'custom',
//       loaderFile: './my-loader.ts',
//     },
//   }
   
//   module.exports = nextConfig

// local|github 
const deployEnv = 'github'
// const deployEnv = 'local'


const nextConfig = {
    output: 'export',
    
    env: {
        customKey: 'my-value',
        imagePrefix: deployEnv == 'github' ? '/learn':''
      }

  }
   
  module.exports = nextConfig
