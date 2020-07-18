module.exports = {
  siteMetadata: {
    name: "TanNguyenLe's Portfolio",
    description: "A blog and portfolio site for Tan Nguyen Le",
    keywords: [
      "tech",
      "frontend developer",
      "javascript",
      "frontend dev",
      "Tan Nguyen Le",
      "react dev",
      "javascript dev",
      "gatsbyjs",
      "theme UI"
    ],
    siteUrl: "https://tannguyenle.netlify.app",
    siteImage: "images/my_photo.png",
    profileImage: `images/my_photo.png`,
    lang: `en`,
    config: {
      sidebarWidth: 280,
    },
  },
  plugins: [
    {
      resolve: "@pauliescanlon/gatsby-theme-terminal",
      options: {
        source: ["projects"],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto Mono\:400,400i,500,500i,600,600i,700, 700i`,
          `Space Mono\:400,400i,700, 700i`
          // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://tannguyenle.netlify.app`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/404`, `/dummy-page/`, `/dev-404-page/`, `/404.html`],
        createLinkInHead: true,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [
          { userAgent: "*", disallow: ["/404", "/dummy-page/"], allow: ["/"] },
        ],
      },
    },
  ],
}
