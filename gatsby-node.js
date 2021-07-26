const _ = require('lodash')
const path = require('path')
const slash = require('slash')
const { createFilePath } = require('gatsby-source-filesystem')
const { paginate } = require('gatsby-awesome-pagination')
const axios = require('axios');
const getOnlyPublished = edges =>
  _.filter(edges, ({ node }) => node.status === 'publish')


const getData = async () => {
  var a =  axios({
		url: 'https://staging-ascstaging.kinsta.cloud/graphql',
		method: 'post',
		data: {
			query: `
				query MyQuery {
				  page(id: 76247, idType: DATABASE_ID) {
					id
					seo {
      focuskw
      metaDesc
      metaKeywords
      opengraphAuthor
      opengraphDescription
      opengraphModifiedTime
      opengraphPublishedTime
      opengraphPublisher
      opengraphSiteName
      opengraphTitle
      opengraphType
      opengraphUrl
      readingTime
      title
      twitterDescription
      twitterTitle
    }
					home {	
					  fieldGroupName
					   campsData {
						campDesc
						campTitle
						campUrl
						campImage {
						  link
						  sourceUrl
						}
						campHoverImage {
							sourceUrl
						}
					  }
					  homeSlider {
						title
						content
						sliderImage {
						  sourceUrl(size: _1536X1536)
						}
					  }
					   bottomKidsReview {
						desc
						subTitle1
						subTitle2
						image {
						  sourceUrl(size: LARGE)
						}
					  }
					  schoolHolidayProgram {
						desc
						
						title
						image {
						  sourceUrl(size: LARGE)
						}
					  }
					  asSeenOn {
						image {
						  sourceUrl(size: LARGE)
						}
					  }
					   howDoesItWork {
						desc
						title
						youtubeUrl
					  }
					  panels {
						... on Page_Home_Panels_Featured {
						  content
						  earlyBird
						  heroImage {
							sourceUrl(size: LARGE)
						  }
						  backgroundImage {
							uri
							sourceUrl
						  }
						}
						... on Page_Home_Panels_Content {
						  containerId
						  fieldGroupName
						  rowClass
						  column {
							fieldGroupName
							numberOfColumns
							text
							youtube
							cssClass
						  }
						  backgroundImage {
							sourceUrl(size: LARGE)
						  }
						}
						... on Page_Home_Panels_Camps {
						  fieldGroupName
						  sectionTitle
						  camp {
							fieldGroupName
							image {
							  sourceUrl(size: LARGE)
							}
							smallDesc
						  }
						}
						... on Page_Home_Panels_WhatsIncluded {
						  fieldGroupName
						  sectionTitle
						  inclusion {
							title
							fieldGroupName
							image {
							  sourceUrl(size: LARGE)
							}
							desc
						  }
						}
						... on Page_Home_Panels_HallOfFame {
						  fieldGroupName
						  sectionTitle
						  subtitle
						  star {
							description
							image {
							  sourceUrl(size: LARGE)
							}
							fieldGroupName
							name
						  }
						}
					  }
					}
					isFrontPage
				  }
			}
			`
		}
	});
	return a;
};   
  
exports.createPages = async ({ actions, graphql }) => {
	const { createPage } = actions
	
	
	
	
	
	const coach = await graphql(`
		{
			allWordpressWpAscHeroes {
				edges {
					node {
						id
						slug
						title
						content
					}
				}
			}
		}
	`)
	const CoachDetailTemplate = path.resolve(`./src/templates/coach_details.js`);
	coach.data.allWordpressWpAscHeroes.edges.forEach((edge,index) => {
		  createPage({
		  path: `/the-asc-heroes/${edge.node.slug}/`,
		  component: slash(CoachDetailTemplate),
		  context: {
			id: edge.node.id
		  },
		})			  
	})
	const CoachTemplate = path.resolve(`./src/templates/coach.js`);
	const Coachs = coach.data.allWordpressWpAscHeroes.edges;
	paginate({
		createPage,
		items: Coachs,
		itemsPerPage: 18,
		pathPrefix: '/the-asc-heroes',
		component: CoachTemplate,
	});
	
	
	
	
	
	
	const allWordpressPost = await graphql(`
		{
			allWordpressPost{
				edges {
					node {
						id
						title
						slug
						categories{
						  id
						  name
						  slug
						}
					}
				}
			}
		}
	`)
	
	const postTemplate = path.resolve(`./src/templates/blog_details.js`);
	const blogTemplate = path.resolve(`./src/templates/blog.js`);
	allWordpressPost.data.allWordpressPost.edges.forEach((edge,index) => {
		  createPage({
		  path: `/blog/${edge.node.slug}/`,
		  component: slash(postTemplate),
		  context: {
			id: edge.node.id
		  },
		})			  
	})
	
	const posts = allWordpressPost.data.allWordpressPost.edges;
	paginate({
		createPage,
		items: posts,
		itemsPerPage: 18,
		pathPrefix: '/blog',
		component: blogTemplate,
	});
	
	
	
	const allWordpressguide = await graphql(`
		{
			allWordpressWpCpt150461 {
				edges {
					node {
						id
						acf {
							featured_image
						}
						date(formatString: "D MMMM, Y")
						
						slug
						title
						content
					}
				}
			}
		}
	`)
	const guideTemplate = path.resolve(`./src/templates/guide_details.js`);
	const guidelistTemplate = path.resolve(`./src/templates/guide.js`);
	allWordpressguide.data.allWordpressWpCpt150461.edges.forEach((edge,index) => {
		  createPage({
		  path: `/guide/${edge.node.slug}/`,
		  component: slash(guideTemplate),
		  context: {
			id: edge.node.id
		  },
		})			  
	})
	
	const guides = allWordpressguide.data.allWordpressWpCpt150461.edges;
	paginate({
		createPage,
		items: guides,
		itemsPerPage: 18,
		pathPrefix: '/guide',
		component: guidelistTemplate,
	});
	
	
	
	const allWordpressflyer = await graphql(`
		{
			allWordpressWpCpt150963 {
				edges {
					node {
						id
						acf {
							featured_image
							active
						}
						date(formatString: "D MMMM, Y")
						
						slug
						title
						content
					}
				}
			}
		}
	`)
	const flyerTemplate = path.resolve(`./src/templates/flyer_details.js`);
	const flyerlistTemplate = path.resolve(`./src/templates/flyer.js`);
	allWordpressflyer.data.allWordpressWpCpt150963.edges.forEach((edge,index) => {
		if(edge.node.acf.active == 1){
			createPage({
		  path: `/flyer/${edge.node.slug}/`,
		  component: slash(flyerTemplate),
		  context: {
			id: edge.node.id
		  },
		})	
		} 
		 		  
	})
	const flyers = allWordpressflyer.data.allWordpressWpCpt150963.edges;
	paginate({
		createPage,
		items: flyers,
		itemsPerPage: 18,
		pathPrefix: '/flyer',
		component: flyerlistTemplate,
	});
	
	
	/*const products = await graphql(`
		{
			allWcProducts(filter: {categories: {elemMatch: {name: {eq: "Shop"}}}}) {
				edges {
					node {
						id
						wordpress_id
						sale_price
						price
						status
						name
						images {
						  src
						}
						slug
					}
				}
			}
		}
	`)
	
	
	const productcat = await graphql(`
		{
			allWcProductsCategories {
			edges {
			  node {
				id
				wordpress_id
				name
				slug
			  }
			}
		  }
		}
	`)
	const ProductcatTemplate = path.resolve(`./src/templates/cat_details.js`);
	
	productcat.data.allWcProductsCategories.edges.forEach((edge,index) => {
		if(edge.node.status !== 'draft'){
			createPage({
			  path: `/sport/${edge.node.slug}/`,
			  component: slash(ProductcatTemplate),
			  context: {
				id: edge.node.wordpress_id,
				name: edge.node.name
			  },
			})		
		}	  
	})
	
	
	
	const ProductTemplate = path.resolve(`./src/templates/product_details.js`);
	const ProductList = path.resolve(`./src/templates/product.js`);
	
	products.data.allWcProducts.edges.forEach((edge,index) => {
		  createPage({
		  path: `/product-shop/${edge.node.slug}/`,
		  component: slash(ProductTemplate),
		  context: {
			id: edge.node.id
		  },
		})			  
	})
	

	
	
	const productsdata = products.data.allWcProducts.edges;
	paginate({
		createPage,
		items: productsdata,
		itemsPerPage: 18,
		pathPrefix: '/product-shop',
		component: ProductList,
	});
	*/
	
	const Category = await graphql(`
		{
			allWordpressCategory {
				edges {
					node {
						id
						name
						slug
					}
				}
			}
		}
	`)
	const CatTemplate = path.resolve(`./src/templates/category.js`);
	Category.data.allWordpressCategory.edges.forEach((edge,index) => {
		  createPage({
		  path: `/category/${edge.node.slug}/`,
		  component: slash(CatTemplate),
		  context: {
			id: edge.node.id,
			name: edge.node.name
		  },
		})			  
	})
	
	
	const tags = await graphql(`
		{
			allWordpressTag {
				edges {
					node {
						id
						name
						slug
					}
				}
			}
		}
	`)
	const TagsTemplate = path.resolve(`./src/templates/tags.js`);
	tags.data.allWordpressTag.edges.forEach((edge,index) => {
		  createPage({
		  path: `/tags/${edge.node.slug}/`,
		  component: slash(TagsTemplate),
		  context: {
			id: edge.node.id
		  },
		})			  
	})
	
	
	const Camps = await graphql(`
		{
			allWordpressWpCpt151986 {
				edges {
					node {
						id
						title
						content
						
						slug
					}
				}
			}
		}
	`)
	const CampsTemplate = path.resolve(`./src/templates/camps_details.js`);
	Camps.data.allWordpressWpCpt151986.edges.forEach((edge,index) => {
		  createPage({
		  path: `/camps/${edge.node.slug}/`,
		  component: slash(CampsTemplate),
		  context: {
			id: edge.node.id
		  },
		})			  
	})
	
	
	
	const City = await graphql(`
		{
			allWordpressWpCpt152600 {
				edges {
					node {
						id
						title
						slug
						wordpress_id
					}
				}
			}
		}
	`)
	const CityTemplate = path.resolve(`./src/templates/city_details.js`);
	City.data.allWordpressWpCpt152600.edges.forEach((edge,index) => {
		  createPage({
		  path: `/school-holiday-programs/${edge.node.slug}/`,
		  component: slash(CityTemplate),
		  context: {
			id: edge.node.id,
			wordpress_id: edge.node.wordpress_id
		  },
		})			  
	})
	
	
	
	let Data = await getData();
	let HomeData = Data.data;
	const HomeComponent = require.resolve('./src/templates/home.js');
	createPage({
		path: '/',
		component: HomeComponent,
		context: {
			HomeData: HomeData,
		}
	});
	
	
	
	
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
