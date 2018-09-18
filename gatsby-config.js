const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, 'data', 'bots'),
        name: 'bots',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, 'data', 'docs'),
        name: 'docs',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "noopener noreferrer"
            }
          }
        ]
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Discord_Fork',
        short_name: 'Discord_Fork',
        start_url: '/',
        background_color: '#181818',
        theme_color: '#3498db',
        display: 'minimal-ui',
        icons: [
          {
            src: '/assets/images/logo/logo16384.png',
            sizes: '16384x16384',
            type: 'image/png'
          },
          {
            src: '/assets/images/logo/logo8192.png',
            sizes: '8192x8192',
            type: 'image/png'
          },{
            src: '/assets/images/logo/logo4096.png',
            sizes: '4096x4096',
            type: 'image/png'
          },{
            src: '/assets/images/logo/logo2048.png',
            sizes: '2048x2048',
            type: 'image/png'
          },{
            src: '/assets/images/logo/logo1024.png',
            sizes: '1024x1024',
            type: 'image/png'
          },{
            src: '/assets/images/logo/logo512.png',
            sizes: '512x512',
            type: 'image/png'
          },{
            src: '/assets/images/logo/logo256.png',
            sizes: '256x256',
            type: 'image/png'
          },{
            src: '/assets/images/logo/logo128.png',
            sizes: '128x128',
            type: 'image/png'
          },{
            src: '/assets/images/logo/logo64.png',
            sizes: '64x64',
            type: 'image/png'
          },{
            src: '/assets/images/logo/logo32.png',
            sizes: '32x32',
            type: 'image/png'
          },{
            src: '/assets/images/logo/logo16.png',
            sizes: '16x16',
            type: 'image/png'
          },{
            src: '/assets/images/logo/logo8.png',
            sizes: '8x8',
            type: 'image/png'
          },{
            src: '/assets/images/logo/logo4.png',
            sizes: '4x4',
            type: 'image/png'
          },{
            src: '/assets/images/logo/logo2.png',
            sizes: '2x2',
            type: 'image/png'
          },{
            src: '/assets/images/logo/logo1.png',
            sizes: '1x1',
            type: 'image/png'
          },{
            src: '/assets/images/logo/logo.svg',
            type: 'image/svg+xml'
          }
        ]
      }
    }
  ],
}
