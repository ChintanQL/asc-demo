module.exports = {
  siteMetadata: {
    title: `Australian Sports Camps`,
    description: `ASC provides the best sports coaching for Australian children and has done so for over 38 years. We run structured skill-improvement sport camps in Australia ensuring that participants have fun whilst developing a deeper love and enthusiasm for their chosen sport.`,
    author: `@australiansportscamps`,
	siteUrl: 'https://staging-ascstaging.kinsta.cloud',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sass',
	{
        resolve: `gatsby-plugin-advanced-sitemap`,
        options: {
           
            // The filepath and name to Index Sitemap. Defaults to '/sitemap.xml'.
            output: "/sitemap.xml",
            
        }
    },
    `gatsby-plugin-smoothscroll`,
	{
      resolve: 'gatsby-source-wordpress',
      options: {
        // The base url to your WP site.
        baseUrl: 'staging-ascstaging.kinsta.cloud',
        // WP.com sites set to true, WP.org set to false
        hostingWPCOM: false,
        // The protocol. This can be http or https.
        protocol: 'https',
        // Use 'Advanced Custom Fields' Wordpress plugin
        useACF: true,
        // Set to true to debug endpoints on 'gatsby build'
        verboseOutput: false,
		excludedRoutes: [
		  '/*/*/media',
		  '/*/*/connect/stripe',
		],
      },
    },
	{
    resolve: `gatsby-plugin-segment-js`,
    options: {
      // your segment write key for your production environment
      // when process.env.NODE_ENV === 'production'
      // required; non-empty string
      prodKey: "CJ6e793dOcxxyLC4FhS5oSxAWGjVQlzi",

      // if you have a development env for your segment account, paste that key here
      // when process.env.NODE_ENV === 'development'
      // optional; non-empty string
      devKey: "CJ6e793dOcxxyLC4FhS5oSxAWGjVQlzi",

      // boolean (defaults to false) on whether you want
      // to include analytics.page() automatically
      // if false, see below on how to track pageviews manually
      trackPage: true,

      trackPageDelay: 50,

      // If you need to proxy events through a custom endpoint,
      // add a `host` property (defaults to https://cdn.segment.io)
      // Segment docs:
      //   - https://segment.com/docs/connections/sources/custom-domains
      //   - https://segment.com/docs/connections/sources/catalog/libraries/website/javascript/#proxy
      host: `https://override-segment-endpoint`,

    
      delayLoad: false,
      delayLoadTime: 1000,
      manualLoad: false
    }
  },
	/*{
      resolve: "gatsby-plugin-segment-analytics",
      options: {
        writeKey: "fPn6Nx2v4ACoy3pEa5yTv2uFiTXE6HGv",
      },
    },*/
	 {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `tags`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields` values
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            tags: node => node.frontmatter.tags,
            path: node => node.frontmatter.path,
          },
        },
        // Optional filter to limit indexed nodes
        filter: (node, getNode) =>
          node.frontmatter.tags !== 'exempt',
      },
    },
	{
      resolve: 'gatsby-plugin-global-context',
      options: {
        context: {
          BACK_URL: "https://staging-ascstaging.kinsta.cloud"
        }
      }
    },
	/*{       
		resolve: '@pasdo501/gatsby-source-woocommerce',
		options: {
			api: 'staging-ascstaging.kinsta.cloud',
			verbose: true,
			https: true,
			api_keys: {
				consumer_key: 'ck_267148935fa9cd6127b534486c64128084c56bc5',
				consumer_secret: 'cs_026a85ca972dc7ed0c2ac5d7b4fef2b412413871',
			},
			fields: ['products', 'products/categories', 'products/attributes'],
			query_string_auth: false,
			api_version: 'wc/v3',
			per_page: 100,
			wpAPIPrefix: 'wp-json',
			encoding: 'utf8',
			axios_config: {
		   
			}
		}
	},*/
	/*{
    resolve: "gatsby-plugin-google-tagmanager",
    options: {
      id: "GTM-PRK5WQ",

      // Include GTM in development.
      // Defaults to false meaning GTM will only be loaded in production.
      includeInDevelopment: false,

      // datalayer to be set before GTM is loaded
      // should be an object or a function that is executed in the browser
      // Defaults to null
      defaultDataLayer: { platform: "gatsby" },
    },
  },*/
	{
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
        },
        `gatsby-remark-lazy-load`,
      ]
    }
  },
  {
    resolve: `gatsby-plugin-nprogress`,
    options: {
      // Setting a color is optional.
      color: "#FF6600",
      // Disable the loading spinner.
      showSpinner: true,
    },
  },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`, // This path is relative to the root of the site.
      },
    },
	{
      resolve: 'gatsby-plugin-disqus',
      options: {
        shortname: 'asc'
      }
    },

	
	{
		resolve: 'gatsby-plugin-react-helmet-canonical-urls',
		options: {
		  siteUrl: 'https://australiansportscamps.com.au',
		},
	},
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
