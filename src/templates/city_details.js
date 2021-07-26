import React, {Component} from 'react';
import Layout from "../components/layout"
import Footer from "../components/common/Footer"
import {Container,Breadcrumb,Image, Row,Col,Button,Card,Table,Modal,Form} from 'react-bootstrap'
import BottomForm from "../components/common/BottomForm"
import Citybooking from "../components/City/Citybooking"
import { graphql,Link } from "gatsby"
import PropTypes from "prop-types"
import playbutton from '../images/play-button.png'
import scrollTo from 'gatsby-plugin-smoothscroll';
import Iframe from 'react-iframe'
import { Helmet } from "react-helmet"
import lifes from '../images/lifes-better-with-sport.png'
import axios from "axios"

class City extends Component {
	
	constructor(props) {
        super(props);
        this.state={
            isOpen:false,
            message:"",
            currentURL:"",
			showInfo: 0,
        }
        this.modalOpen = this.modalOpen.bind(this);
        this.modalClose = this.modalClose.bind(this);
        this.callbackFunction = this.callbackFunction.bind(this);
    }
    modalOpen(){
        this.setState({
            isOpen:true,
        })
    }
    modalClose(){
        this.setState({
            isOpen:false,
        })
    }
	componentDidMount() {
		var wordpress_id = this.props.pageContext.wordpress_id;
		console.log(wordpress_id);
		this.setState({currentURL: window.location.href})
		axios({
			url: "https://staging-ascstaging.kinsta.cloud/wp-json/newasc/v1/city_flyer/"+wordpress_id,
			method: 'get'}).then(res => {
			this.setState({showInfo: res.data.ResponseData.Display_FORM})
		})
    }
	
	
	
	callbackFunction = (childData) => {      this.setState({message: childData})}
	
	render() {
		const page = this.props.data.allWordpressWpCpt152600;
		const page_title = this.props.data.allWordpressWpCpt152600.edges[0].node.title;
		const page_products = this.props.data.allWordpressWpCpt152600.edges[0].node.acf.products.join();
		const tags = this.props.data.allWordpressWpCpt152600.edges[0].node.acf.tags.join();
		const state = this.props.data.allWordpressWpCpt152600.edges[0].node.acf.state;
		var wordpress_id = this.props.data.allWordpressWpCpt152600.edges[0].node.wordpress_id;
		console.log(this.props.data.allWordpressWpCpt152600.edges[0].node.acf.tags);
		
		return (
			<Layout>
			
				<>
				<Helmet>
				<title>{page.edges[0].node.acf.page_title} - Australian Sports Camps</title>
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
								<Link className="nav-link p-0" to="/school-holiday-programs/">City</Link>
							</Breadcrumb.Item>
							<Breadcrumb.Item active href=""className="">{page.edges[0].node.title}</Breadcrumb.Item>
						</Breadcrumb>
						<h2 className="heading-banner">{page.edges[0].node.acf.page_title}</h2>
						</div>
					</Container>
				</section>
				<BottomForm/>
				<section className="City-details-section-2">
					<Container>
						<div className="">
							<Container>
								<div className="title">
									<h2 className="uppercase">{page.edges[0].node.acf.sub_title_1}</h2>
									<h2 className="uppercase">{page.edges[0].node.acf.sub_title_2}</h2>
								</div>
								{(this.state.showInfo == 1) ? (<div className="text-center">
									<Button className="uppercase btn btn-orange-large"  onClick={() => scrollTo('#flyer_form')}>DOWNLOAD FLYER</Button>
								</div>) : ("")}
								
								
							</Container>
						</div>
					</Container>
				</section>
				<section className="City-details-section-3">
					<Container>
						<Row className="main-book-card-row">
							<Citybooking parentCallback = {this.callbackFunction} products={page_products} tags={state} />
							
						</Row>
					</Container>
				</section>
				<section className="Batman-Section">
					<Container>
					<div className="title mb-0">
						<Row className="justify-content-center">
							<Col xl={9} lg={11}>
								<h2>{page.edges[0].node.acf.school_holiday_program.title}</h2>
								
							</Col>
						</Row>
					</div>
					<div className="Batman-Section-data">
						<Row className="justify-content-center align-items-center">
							<Col xl={4} lg={4} md={12} className="justify-content-center d-flex lg-mb-2">
								<Image src={page.edges[0].node.acf.school_holiday_program.image} fluid alt="cardhover" className="batman" />
							</Col>
							<Col xl={8} lg={8} md={12}>
								<div className="pl-3 pr-2">
									<div className="font-15 font-medium color-3b" dangerouslySetInnerHTML={{ __html: page.edges[0].node.acf.school_holiday_program.desc}} />
									<Link className=" uppercase btn-sm btn-orange-large" to="/book-a-camp">BOOK A CAMP TODAY</Link>
								</div>                        
							</Col>
						</Row>
					</div>
					</Container>
				</section>
				<section className="City-details-section-4 tbl">
					<Container>
						<div className="mb-4">
							<div className="title-main mb-0">
								<h2 className="text-white">{page.edges[0].node.acf.holiday_table.title}</h2>
							</div>
							<div className="font-15 mb-5 font-medium text-center text-white" dangerouslySetInnerHTML={{ __html: page.edges[0].node.acf.holiday_table.desc}} />
							
							<div className="font-15 font-medium text-center text-white" dangerouslySetInnerHTML={{ __html: page.edges[0].node.acf.holiday_table.sub_title}} />
								
						</div>
					
							{(page.edges[0].node.acf.holiday_table.table) ? (
								<>
								<Table striped responsive>
									<thead>
										<tr>
											<th className="first-td">Period</th>
											<th>Dates</th>
											<th>Length</th>
										</tr>
									</thead>
									<tbody>
										{ page.edges[0].node.acf.holiday_table.table.map( prop => { return (
											<tr>
												<td className="first-td">{prop.period}</td>
												<td>{prop.dates}</td>
												<td>{prop.length}</td>
											</tr>
										)})}
									</tbody>
								</Table>
								</>
							) : ("")}
									
					</Container>
				</section>
				
				
				<section className="Modal-section">
					<Container  >
						<div className="title">
							<Row className="justify-content-center">
								<Col xl={9} lg={11}>
									<h2>{page.edges[0].node.acf.how_does_it_work.title}</h2>
									<p dangerouslySetInnerHTML={{ __html: page.edges[0].node.acf.how_does_it_work.desc}} />
								</Col>
							</Row>
						</div>
					</Container>

					<div className="Modal-section-data">
						<Container>
								<Image src={playbutton} className="img-fluid" alt="" width="60" height="60" 
								 onClick={this.modalOpen} />
						</Container>
					</div>
				</section>
				<Modal show={this.state.isOpen} onHide={this.modalClose} size="lg" className="video-modal"
				aria-labelledby="contained-modal-title-vcenter"
				centered >
					<Modal.Body className="p-0">
						<button type="button" onClick={this.modalClose} class="close">
							<span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
						</button>
						<Iframe url={page.edges[0].node.acf.how_does_it_work.youtube_url} width="100%" height="400px" id="video_id" className=""  
						display="initial" position="relative"/>
					</Modal.Body>
				</Modal>
				
				{(page.edges[0].node.acf.included) ? (
					<section style={{padding: "90px 0px !important"}} className="Included-section">
						<Container>
							<div className="title">
								<Row className="justify-content-center">
									<Col xl={9} lg={11}>
										<h2>WHAT'S INCLUDED</h2>
									</Col>
								</Row>
							</div>
							<Row> 
								{ page.edges[0].node.acf.included.map( prop => { return (
									<Col xl={4} lg={4} md={6} className="mb-30">
										<Card className="icon-card">
											<div className="card-img">
												<Image src={prop.icon} fluid alt="cardhover" width="100" height="100" />
											</div>
											<Card.Body>
												<Card.Title as="h5">{prop.title}</Card.Title>
												<Card.Text as="div" className="" dangerouslySetInnerHTML={{ __html: prop.desc}} />	
											</Card.Body>
										</Card>
									</Col>
								)})}
							</Row>
							<Row>
								<Col xl={12} lg={12} md={12}>
									<div className="pl-3 pr-2 text-center">
							
										<Link className=" uppercase btn-sm btn-orange-large" to="/book-a-camp" >BOOK A CAMP TODAY</Link>
									</div>                        
								</Col>
							</Row> 
						</Container> 
					</section>	
				) : ("")}
				
				{(page.edges[0].node.acf.testimonial) ? (
					<section className="Kid-section">
						<div className="Kid-section-first">
							<Container>
								<Row className="align-items-center">
									<Col xl={6} lg={6} className="kid-image">
										<div className="d-inline">
											<Image src={page.edges[0].node.acf.testimonial.image} fluid alt="cardhover" />
										</div>
									</Col>
									<Col xl={6} lg={6} className="text-center kids-data">
										<div className="mb-30 font-22 font-semibold text-white" dangerouslySetInnerHTML={{ __html: page.edges[0].node.acf.testimonial.testimonial}} />
										<div className="camptestimonialsec_logo"> <Image src={lifes} alt="cardhover" /></div>
									</Col>
								</Row>
							</Container>
						</div>
						<div className="Kid-section-second">
							<Container>
								<div className="title">
									<h2 className="uppercase">{page.edges[0].node.acf.testimonial.title_1}</h2>
									<h2 className="uppercase">{page.edges[0].node.acf.testimonial.title_2}</h2>
								</div>
								<div className="text-center">
									<Link id="flyer_form" className=" uppercase btn-sm btn-orange-large" to="/book-a-camp">BOOK A CAMP TODAY</Link>
								</div>
							</Container>
						</div>
					</section>	
				) : ("")}
				
				
				{(this.state.showInfo == 1) ? (<div className="flyer_formbx" >
				<div className="container">
				<iframe height="560" width="100%" frameBorder="0"    src={"https://staging-ascstaging.kinsta.cloud/gravity-flyer/?form_page="+page_title+"&id="+wordpress_id+"&url="+this.state.currentURL} title="description" /> 
				</div>
				</div>) : ("")}
				
				
				<BottomForm/>
				<Footer/>
				</>
			</Layout>
      )
  }
}

City.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default City


export const pageQuery = graphql`
  query($id: String!) {
    allWordpressWpCpt152600(filter: {id: { eq: $id }}) {
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
				wordpress_id
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
				  page_title
				  sub_title_1
				  sub_title_2
				  products
				  tags
				  state
				  testimonial {
					image
					testimonial
					title_1
					title_2
				  }
				  school_holiday_program {
					desc
					image
					
					title
				  }
				  included {
					desc
					icon
					title
				  }
				  flyer {
					desc
					title
				  }
				  holiday_table {
					desc
					title
					sub_title
					table {
					  dates
					  length
					  period
					}
				  }
				   how_does_it_work {
					desc
					title
					youtube_url
				  }
				}
				slug
				title
			}
		}
    }
	
	
  }
  
`

