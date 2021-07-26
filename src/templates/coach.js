import React, {Component} from 'react';
import { graphql,Link } from "gatsby"
import PropTypes from "prop-types"
import {Container,Breadcrumb} from 'react-bootstrap'
import {Image,ListGroup,Form,InputGroup,FormControl,Button} from 'react-bootstrap'
import {Row,Col,Card} from 'react-bootstrap'
import Layout from "../components/layout"
import Footer from "../components/common/Footer"
import Coachbanner from "../components/common/Coachbanner"
import BottomForm from "../components/common/BottomForm"
import card1 from '../images/blog-card-1.png'
import imgbox1 from '../images/blog-imgbox-1.png'
import imgbox2 from '../images/blog-imgbox-2.png'
import imgbox3 from '../images/blog-imgbox-3.png'
import imgbox4 from '../images/blog-imgbox-4.png'
import sidebaradd1 from '../images/sidebar-add-1.png'
import cardhover from '../images/card-hover-img.png'
import sidebaradd2 from '../images/sidebar-add-2.png'
import { FaSearch } from "react-icons/fa";
import { Helmet } from "react-helmet"
class coach extends Component {
  render() {
    const blog = this.props.data.allWordpressWpAscHeroes
   
   
    return (
		<Layout>
		<Helmet>
				<title>Meet The ASC Heroes & Talents - Australian Sports Camps</title>
				<meta name="title" content="Meet The ASC Heroes & Talents - Australian Sports Camps"></meta>
				<meta property="og:title" content="Meet The ASC Heroes & Talents - Australian Sports Camps"></meta>
				<meta property="twitter:title" content="Meet The ASC Heroes & Talents - Australian Sports Camps"></meta>

				<meta name="description" content="Get coached by your favourite sports celebrity with Australian Sports Camps. Coaching in all major sports in Australia. Kids learn sports at top facilities."></meta>
				<meta property="og:description" content="Get coached by your favourite sports celebrity with Australian Sports Camps. Coaching in all major sports in Australia. Kids learn sports at top facilities."></meta>
				<meta property="twitter:description" content="Get coached by your favourite sports celebrity with Australian Sports Camps. Coaching in all major sports in Australia. Kids learn sports at top facilities."></meta>

				<meta name="keywords" content="ASC Heroes, Sports Training, Summer Sports Coaching, Sports Coaching in Australia, Sports Coach, sports coach training courses, Sport Coach Australia, Cricket coach, football coaching for kids"></meta>

				<meta property="og:type" content="website"></meta>
				<meta property="twitter:card" content="summary_large_image"></meta>


			</Helmet>
			<section className="Banner-Section">
                <Container>
                    <div className="Banner-Section-data">
                    <Breadcrumb>
                        <Breadcrumb.Item className="">
                            <Link className="nav-link p-0" to="/">Home</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active href=""className="">ASC Heroes</Breadcrumb.Item>
                    </Breadcrumb>
                    <h2 className="heading-banner">Meet the ASC Heroes</h2>
                    </div>
                </Container>
            </section> 
			<Coachbanner/>
			 <section className="Hero-section-2">
                <Container>
                    <div className="Hero-Section-2-data">
                        <Row>
                            {blog && blog.edges.map( prop => { return (
								<Col xl={4} lg={4} md={7} sm={9} xs={10} className="main-listed-card">
									<Card  className="listed-card mb-0">
										<Link to={"/the-asc-heroes/"+prop.node.slug} className="card-img">
											<div className="inner-card ">
												<Image src={cardhover} fluid alt="cardhover"/>
											</div>
											<Image variant="top" src={prop.node.acf.featured_image} fluid alt="card"/>
										</Link>
										<Card.Body>
											<Link to={"/the-asc-heroes/"+prop.node.slug} dangerouslySetInnerHTML={{ __html: prop.node.title}} />
										</Card.Body>
									</Card>
								</Col>	
							)})}
							
							<Col xl={12} lg={12} md={12} sm={12} xs={12} >
								{(this.props.pageContext.previousPagePath !== "") ? (<Link className="uppercase p btn-sm btn-orange"  to={this.props.pageContext.previousPagePath}>Previous</Link>) : (<Link className="uppercase btn-sm btn-orange invisible"  to={this.props.pageContext.previousPagePath}>Previous</Link>)}
			
			
								{(this.props.pageContext.nextPagePath !== "") ? (<Link className="uppercase n btn-sm btn-orange" to={this.props.pageContext.nextPagePath}>Next</Link>) : (<Link className="uppercase btn-sm btn-orange invisible" to={this.props.pageContext.nextPagePath}>Next</Link>)}
								
							</Col>	
								
						</Row>
					</div>		
				</Container>		
			</section>		
			<BottomForm/>
			<Footer/>
			 
		 
		</Layout>
	)
	}}

coach.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default coach


export const pageQuery = graphql`
	query($skip: Int!, $limit: Int!) {
		allWordpressWpAscHeroes(skip: $skip, limit: $limit) {
		edges {
			node {
				id
				acf {
					featured_image
				}
				slug
				title
				content
			}
		}
	}
  }
  
`

