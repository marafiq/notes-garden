module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      
      options: {},
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Developer Insights`,
    author: `Adnan Rafiq`,
    description: `A blog by Adnan Rafiq`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/madnan_rafiq`,
      },
      {
        name: `github`,
        url: `https://github.com/marafiq`,
      },
    ],
  },
}
