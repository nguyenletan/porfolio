module.exports = {
  siteMetadata: {
    name: "TanNguyenLe's Portfolio",
    description: "A blog and portfolio site for Tan Nguyen Le",
    keywords: ["tech", "frontend developer", "javascript", "frontend dev", "amorpheuz", "Tan Nguyen Le", "react dev", "javascript dev"],
    siteUrl: "https://tannguyenle.dev",
    siteImage: "images/favicon-32x32.png",
    profileImage: `images/favicon-32x32.png`,
    lang: `en`,
    config: {
      sidebarWidth: 281
    }
  },
  plugins: [
    {
      resolve: "@pauliescanlon/gatsby-theme-terminal",
      options: {
        source: ["posts", "projects"]
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `IBM Plex Mono\:400,400i,500,500i,600,600i,700, 700i` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://nguyenletan.dev`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [
          `/404`,
          `/dummy-page/`,
          `/dev-404-page/`,
          `/404.html`
        ],
        createLinkInHead: true,
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [
          {userAgent: '*', disallow: ['/404','/dummy-page/'], allow: ['/']}
        ]
      }
    },
  ]
};
