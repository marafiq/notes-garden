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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-173098616-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        
        // Defers execution of google analytics script after page load
        defer: true,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "adnanrafiq.com",
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
