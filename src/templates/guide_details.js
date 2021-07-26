import React, {Component} from 'react';
import Layout from "../components/layout"
import Footer from "../components/common/Footer"
import BottomForm from "../components/common/BottomForm"
import Guidebanner from "../components/common/Guidebanner"
import {Container,Breadcrumb} from 'react-bootstrap'
import {Row,Col,Card,Image} from 'react-bootstrap'
import { Link,graphql } from 'gatsby'
import PropTypes from "prop-types"
import { Disqus } from 'gatsby-plugin-disqus'
import { Helmet } from "react-helmet"
class BlogDetails extends Component {
  render() {
  
	const blog = this.props.data.allWordpressWpCpt150461
	const id = this.props.data.allWordpressWpCpt150461.edges[0].node.wordpress_id
	const title = this.props.data.allWordpressWpCpt150461.edges[0].node.title
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
									<Link className="nav-link p-0" to="/guide">Guide</Link>
								</Breadcrumb.Item>
								<Breadcrumb.Item active href="" dangerouslySetInnerHTML={{ __html: blog.edges[0].node.title}} className="" />
							</Breadcrumb>
							<h2 className="heading-banner">Guide</h2>
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
										<span> by {blog.edges[0].node.acf.author_name} / { blog.edges[0].node.date}</span>
										<div className="card-img mb-3">
											<Image src={ blog.edges[0].node.acf.featured_image} fluid />
										</div>
										<Card.Text as="div" dangerouslySetInnerHTML={{ __html: blog.edges[0].node.content}} />
									</Card>
								</Col>
								<Col xl={4} lg={4} md={4} className="lg-mb-2">
  <iframe height="450" width="100%" frameBorder="0" src={"https://staging-ascstaging.kinsta.cloud/gravity-guide/?id="+id} title="description" />
									
									<Guidebanner />
								</Col>
							</Row>
						</div>
						<div className="clearfix nav-controls border rounded mb-4">
                            {(blog.edges[0].previous != null) ? (<Link to={"guide/"+blog.edges[0].previous.slug+"/"} className="nav-control-left float-left  rounded p-1">
                               <span className="label-text  d-block">Previous Post</span>
                               <span className="section-heading-3  mb-0">{blog.edges[0].previous.title}</span>
                            </Link>) : ('')}
							
							{(blog.edges[0].next != null) ? (<Link to={"guide/"+blog.edges[0].next.slug+"/"} className="nav-control-left float-right text-right  rounded p-1">
                               <span className="label-text  d-block">Next Post</span>
                               <span className="section-heading-3  mb-0">{blog.edges[0].next.title}</span>
                            </Link>) : ('')}
							
                        </div>
						<Disqus config={disqusConfig} />
					</Container>
				</section>
				{(blog.edges[0].node.acf.footer_title != "") ? (
					<section className="Resource-details-section-2">
						<Image src={ blog.edges[0].node.acf.footer_image} />
						<div className="container">
							<div className="Resource-details-Section-data">
								<div className="row justify-content-end">
									<div className="col-xl-5 col-lg-6 col-md-10">
										<div className="title text-left">
											<h2>{ blog.edges[0].node.acf.footer_title} </h2>
											<div dangerouslySetInnerHTML={{ __html: blog.edges[0].node.acf.footer_desc}} />
										</div>
										<div className="text-center">
											<button className=" uppercase btn-orange-border">{ blog.edges[0].node.acf.footer_button_text}</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				) : ("")}
				
				
				
      
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
    allWordpressWpCpt150461(filter: {id: { eq: $id }}) {
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
				
				acf {
					featured_image
					footer_title
					footer_desc
					footer_image
					footer_button_text
					author_name
				}
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
				title
				content
				wordpress_id
				slug
			}
		}
    }
	
	
  }
  
`
