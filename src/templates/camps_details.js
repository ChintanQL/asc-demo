import React, {Component} from 'react';
import Layout from "../components/layout"
import Footer from "../components/common/Footer"
import {Container,Breadcrumb, Row,Col} from 'react-bootstrap'
import BottomForm from "../components/common/BottomForm"
import Campbooking from "../components/Camps/Campbooking"
import { graphql,Link } from "gatsby"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import queryString from 'query-string'
import lifes from '../images/lifes-better-with-sport.png'
class Camps extends Component {
	
	constructor(props) {
		super(props);
	}
	state = {
        
		query_code:"",
		code:"",
		shown: "d-none"
    };
	componentDidMount() {
		
		
		const query = new URLSearchParams(this.props.location.search);
		const ccode = query.get('coupon-code');
		if(ccode != null){
			if(ccode != ""){
				this.setState({query_code:"?coupon-code="+ccode})
				this.setState({code:ccode})
				this.setState({shown: "d-block"});
			}
			else{
				this.setState({query_code:""})
				this.setState({code:""})
				this.setState({shown: "d-none"});
			}
		}
		else{
				this.setState({code:""})
				this.setState({query_code:""})
				this.setState({shown: "d-none"});
		}
		
		
    }
	
	
	render() {
		const page = this.props.data.allWordpressWpCpt151986;
		
		return (
			<Layout>
			
				<>
				<Helmet>
				<title>{page.edges[0].node.title} Kids Sports Camp - Australian Sports Camps</title>
				<meta name="title" content={page.edges[0].node.yoast.title}></meta>
		<meta name="description" content={page.edges[0].node.yoast.metadesc}></meta>
		 <meta name="keywords" content={page.edges[0].node.yoast.metakeywords}></meta>
		<meta property="og:type" content="website"></meta>
		<meta property="og:title" content={page.edges[0].node.yoast.opengraph_title}></meta>
		<meta property="og:description" content={page.edges[0].node.yoast.opengraph_description}></meta>
		<meta property="twitter:card" content="summary_large_image"></meta>
		<meta property="twitter:title" content={page.edges[0].node.yoast.title}></meta>
		<meta property="twitter:description" content={page.edges[0].node.yoast.twitter_description}></meta>
			</Helmet>
				<section className="Banner-Section">
					<Container>
						<div className="Banner-Section-data">
						<Breadcrumb>
							<Breadcrumb.Item className="">
								<Link className="nav-link p-0" to="/">Home</Link>
							</Breadcrumb.Item>
							<Breadcrumb.Item className="">
								<Link className="nav-link p-0" to="/book-a-camp">Camp</Link>
							</Breadcrumb.Item>
							<Breadcrumb.Item active href=""className="" dangerouslySetInnerHTML={{ __html: page.edges[0].node.title}} />
						</Breadcrumb>
						<h2 className="heading-banner" dangerouslySetInnerHTML={{ __html: page.edges[0].node.title}} />
						</div>
					</Container>
				</section>	
                <section className="Sport-details-section-2">
					<Container>
						<Row className="mb-30">
							<Col xl={12}>
									<div className="font-15 font-medium color-3b mb-0" dangerouslySetInnerHTML={{ __html: page.edges[0].node.content}}  />
							</Col>
						</Row>
					
					</Container>
				</section>
				<section className="Sport-details-section-3">
					<Container>
						
							<Campbooking wid={page.edges[0].node.wordpress_id} category={page.edges[0].node.acf.product_category} name={page.edges[0].node.title}   />
						
						<p className="font-italic font-medium mb-0 disclaimer_bxsec" >{page.edges[0].node.acf.disclaimer}</p>
                    </Container>
                </section>
				
				<BottomForm/>
				<Footer/>
				</>
			</Layout>
      )
  }
}

Camps.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Camps


export const pageQuery = graphql`
  query($id: String!) {
    allWordpressWpCpt151986(filter: {id: { eq: $id }}) {
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
				acf {
						  product_category
						  disclaimer
						}
				
				date(formatString: "D MMMM, Y")
			}
		}
    }
	
	
  }
  
`

