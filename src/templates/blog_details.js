import React, {Component} from 'react';
import Layout from "../components/layout"
import Footer from "../components/common/Footer"
import BottomForm from "../components/common/BottomForm"
import {Container,Breadcrumb} from 'react-bootstrap'
import {Row,Col,Card,Image,Form,ListGroup,Button} from 'react-bootstrap'
import { Link,graphql } from 'gatsby'
import card1 from '../images/blog-card-1.png'
import PropTypes from "prop-types"
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'
import Main from '../components/Search/Main';
import Menubannertwo from '../components/common/Menubannertwo'
import Blogbanner from '../components/common/Blogbanner'
import sidebaradd1 from '../images/sidebar-add-1.png'
import sidebaradd2 from '../images/sidebar-add-2.png'
import LatestPost from '../components/common/LatestPost'
import { Helmet } from "react-helmet"
class BlogDetails extends Component {
  render() {
  
	const blog = this.props.data.allWordpressPost
	const id = this.props.data.allWordpressPost.edges[0].node.wordpress_id
	const title = this.props.data.allWordpressPost.edges[0].node.title
	 	const category = this.props.data.allWordpressCategory
   	const tags = this.props.data.allWordpressTag
	let disqusConfig = {
		url: "",
		identifier: id,
		title: title,
	}
      return (
          <Layout>
            <>
			<Helmet>
				<title>{blog.edges[0].node.title} - Australian Sports Camps</title>
				<meta name="title" content={blog.edges[0].node.yoast.title}></meta>
				<meta name="description" content={blog.edges[0].node.yoast.metadesc}></meta>
				 <meta name="keywords" content={blog.edges[0].node.yoast.metakeywords}></meta>
				<meta property="og:type" content="website"></meta>
				<meta property="og:title" content={blog.edges[0].node.yoast.opengraph_title}></meta>
				<meta property="og:description" content={blog.edges[0].node.yoast.opengraph_description}></meta>
				<meta property="twitter:card" content="summary_large_image"></meta>
				<meta property="twitter:title" content={blog.edges[0].node.yoast.title}></meta>
				<meta property="twitter:description" content={blog.edges[0].node.yoast.twitter_description}></meta>	
				
			</Helmet>
			
			
			
				<section className="Banner-Section">
					<Container>
						<div className="Banner-Section-data">
							<Breadcrumb>
								<Breadcrumb.Item className="">
									<Link className="nav-link p-0" to="/">Home</Link>
								</Breadcrumb.Item>
								<Breadcrumb.Item className="">
									<Link className="nav-link p-0" to="/blog">Blog</Link>
								</Breadcrumb.Item>
								<Breadcrumb.Item active href="" dangerouslySetInnerHTML={{ __html: blog.edges[0].node.title}} className="" />
							</Breadcrumb>
							<h2 className="heading-banner">Blog</h2>
						</div>
					</Container>
				</section>
				<section className="Blog-details-Section-2">
					<Container>
						<div className="Blog-details-Section-2-data">
							<Row>
								<Col xl={8} lg={8} md={12} className="lg-mb-2">
									<Card className="blog-details-card mb-30">
										<Card.Title as="h5" dangerouslySetInnerHTML={{ __html: blog.edges[0].node.title}} />
										
										
										<div className="card-img mb-3">
											<Image src={blog.edges[0].node.acf.feature_image2} fluid />
										</div>
										<Card.Text as="div" className="smallimg" dangerouslySetInnerHTML={{ __html: blog.edges[0].node.content}} />
									</Card>
								</Col>
								<Col xl={4} lg={4} md={12}>
                                <div className="side-sticky">
								
								 
								
                                    <Form>
										{/*  */}
										<div className="mb-4 search">
											<h3 className="font-20 mb-2 font-medium">Search</h3> 
												<Main />
												
											
										</div>
										{/*  */}
										
										<div className="inner-sidebar mb-4">
												<h3 className="font-20 mb-2 font-medium">Categories</h3>
													<ListGroup as="ul" className="categaries">
														
														{category && category.edges.map( (propd,i) => {
															return (
																
																(propd.node.name !== 'Uncategorised') ? (
																	<>{(propd.node.count > 0) ? (<ListGroup.Item key={i} as="li" className="font-16 justify-content-between d-flex align-items-center">
																	<Link to={"/category/"+propd.node.slug+"/"} className="mr-1 color-70 font-regular decoration-none">{propd.node.name}</Link> <p className="mb-0 color-70 font-regular">{propd.node.count}</p>
																	</ListGroup.Item>) : ("")}</>
																) : ("") 
															)
														})}
													</ListGroup>
										</div>
										{/*  */}
										<div className="inner-media-sidebar mb-4">
											<h3 className="font-20 mb-2 font-medium">Latest Posts</h3>
											<LatestPost />
											
										</div>
										{/*  */}
										<div className="mb-4 text-center blgimg memimg">
											<Blogbanner />
										</div>
										{/*  */}
										
										{/*  */}
										<div className="mb-4">
											<h3 className="font-20 mb-2 font-medium">About Blog</h3>
											<p className="font-16 font-medium color-70">Discover Ideas, trends & insights and get access to handy resources.</p>
										</div>
										{/*  */}
										<div className="mb-4 text-center">
											<Link to="/resources">
												<Image src={sidebaradd2} fluid />
											</Link>
										</div>
										{/*  */}
										<div className="inner-sidebar mb-4">
											<h3 className="font-20 mb-2 font-medium">Browse Tags</h3>
											{tags && tags.edges.map( (propd,i) => {
															return (
																
																(propd.node.name !== 'Uncategorised') ? (
																	<>
																	{(propd.node.count > 0) ? (
																		<>
																		<Link to={"/tags/"+propd.node.slug+"/"} dangerouslySetInnerHTML={{ __html: propd.node.name+"("+propd.node.count+")"}}  className="tags" /> </>
																	) : ("")}
																	</>
																	
																) : ("") 
															)
														})}
											
											
										</div>
									</Form>
                                </div>
                            </Col>			
							</Row>
						</div>
						<div className="clearfix nav-controls border rounded mb-4">
                            {(blog.edges[0].previous != null) ? (<Link to={"blog/"+blog.edges[0].previous.slug+"/"} className="nav-control-left float-left  rounded p-1">
                               <span className="label-text  d-block">Previous Post</span>
                               <span className="section-heading-3  mb-0">{blog.edges[0].previous.title}</span>
                            </Link>) : ('')}
							
							{(blog.edges[0].next != null) ? (<Link to={"blog/"+blog.edges[0].next.slug+"/"} className="nav-control-left float-right text-right  rounded p-1">
                               <span className="label-text  d-block">Next Post</span>
                               <span className="section-heading-3  mb-0">{blog.edges[0].next.title}</span>
                            </Link>) : ('')}
							
                        </div>
						<Disqus config={disqusConfig} />
					</Container>
				</section>

				
				
      
              <BottomForm/>
              <Footer/>
            </>
          </Layout>
      )
  }
}

BlogDetails.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default BlogDetails

export const pageQuery = graphql`
  query($id: String!) {
    allWordpressPost(filter: {id: { eq: $id }}) {
		edges {
			next {
				slug
				title
			}	
			previous {
				slug
				title
			}
			node {
				id
				title
				content
				acf {
					feature_image2
					author_name
				}
				wordpress_id
				slug
				
				
				yoast {
				focuskw
				linkdex
				meta_robots_adv
				meta_robots_nofollow
				meta_robots_noindex
				metadesc
				metakeywords
				opengraph_description
				opengraph_image
				opengraph_title
				redirect
				title
				twitter_description
				twitter_image
			  }
				date(formatString: "D MMMM, Y")
			}
		}
    }
	allWordpressCategory {
		edges {
			node {
				id
				name
				slug
				count
			}
		}
	}
	allWordpressTag {
		edges {
			node {
				id
				name
				count
				slug
			}
		}
	}
	
	
  }
  
`
