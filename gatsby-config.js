module.exports = {
  siteMetadata: require("./site-metadata.json"),
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-154231551-1`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
        options: {
          name: `Global Lighting Project | Empowering The World`,
          short_name: `Global Lighting Project`,
          description: `Non-profit organization on a mission to aid developing communities with solar-powered LED lights`,
          start_url: `/`,
          background_color: `#fff`,
          theme_color: `#ffc529`,
          display: `standalone`,
          icon: `src/images/logo.png`, // This path is relative to the root of the site.
        },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
