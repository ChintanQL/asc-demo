import React, {Component} from 'react';
import {Container,Breadcrumb,Col,Row,Card,Image} from 'react-bootstrap'
import Layout from "../components/layout"
import { Link } from 'gatsby'
import Footer from "../components/common/Footer"
import BottomForm from "../components/common/BottomForm"
import Campbanner from "../components/common/Campbanner"
import card1 from '../images/card1.png'
import cardhover from '../images/card-hover-img.png'
import hover from '../images/Hover_Img.png'
import axios from 'axios';
import { Helmet } from "react-helmet"

class Partner extends Component {
	
	state = {
		PageData: [],
		PageDataOther: [],
		result: 0,
		showInfo: 0
	}
	
	componentDidMount() {
		axios({
			url: 'https://staging-ascstaging.kinsta.cloud/wp-json/newasc/v1/camp_partner',
			method: 'get'}).then(res => {
			const chunkSize = 3;
			const arr = res.data.ResponseData.camps;
			const groups = arr.map((e, i) => { 
				 return i % chunkSize === 0 ? arr.slice(i, i + chunkSize) : null; 
			}).filter(e => { return e; });
			console.log({arr, groups});	
				
				
				
			this.setState({PageData: groups})
			this.setState({PageDataOther: res.data.ResponseData.camps_data[0]})
			this.setState({result: 1})
			this.setState({showInfo: 1})
		})
	}
	
	render() {
		return (
			  <Layout>
				<>
				<Helmet>
				<title>Partner Programs - Australian Sports Camps|Holiday Camps</title>
				<meta name="title" content="Partner Programs - Australian Sports Camps|Holiday Camps"></meta>
				<meta property="og:title" content="Partner Programs - Australian Sports Camps|Holiday Camps"></meta>
				<meta property="twitter:title" content="Partner Programs - Australian Sports Camps|Holiday Camps"></meta>

				<meta name="description" content="Book a holiday partnership program for kids of 5 to 15. Sports camps for all major sports in Australia. We ensure your kids receive coaching at top facilities."></meta>
				<meta property="og:description" content="Book a holiday partnership program for kids of 5 to 15. Sports camps for all major sports in Australia. We ensure your kids receive coaching at top facilities."></meta>
				<meta property="twitter:description" content="Book a holiday partnership program for kids of 5 to 15. Sports camps for all major sports in Australia. We ensure your kids receive coaching at top facilities."></meta>

				<meta name="keywords" content="Partner programs, Partnership programs for kids, Partnership programs Australia, Sports Partner programs, Sports programs, Sports Holiday Programs, Partner programs for Children"></meta>

				<meta property="og:type" content="website"></meta>
				<meta property="twitter:card" content="summary_large_image"></meta>


			</Helmet>
				<div className="laoder" style={{ display: this.state.showInfo == 0 ? "block" : "none" }} >
					<div id="preloader" aria-busy="true" aria-label="Loading, please wait." role="progressbar">
						<img alt="" className="icon" src="https://staging-ascstaging.kinsta.cloud/demo.svg" />
					</div>
				</div>
				<section className="Banner-Section">
					<Container>
						<div className="Banner-Section-data">
						<Breadcrumb>
							<Breadcrumb.Item className="">
								<Link className="nav-link p-0" to="/">Home</Link>
								</Breadcrumb.Item>
							<Breadcrumb.Item active href="" className="">Camps</Breadcrumb.Item>
						</Breadcrumb>
						<h2 className="heading-banner">Partner Programs</h2>
						</div>
					</Container>
				</section>
				<Campbanner/>
				<section className="Sport-section-2">
					<Container>
						<div className="title-main mb-0">
							{(this.state.result === 1) ? (<><h2>{this.state.PageDataOther.program.top_title}</h2></>) : ("")}
							
							{(this.state.result === 1) ? (<><p className="mb-2" dangerouslySetInnerHTML={{ __html: this.state.PageDataOther.program.top_desc}} /></>) : ("")}
						</div>
					</Container>
				</section>
				<section className="Sport-section-3">
					<Container>
						<Row>
							{(this.state.result === 1) ? (
									<>
									{this.state.PageData.map((cmp) => 
										 <Col xl={4} lg={4} md={7} sm={9} xs={10} className="main-styled-card">
										{cmp.map((camp) => 
											 <Card  className="listed-card mb-0">
												<Link  to={camp.slug} className="card-img">
													<div className="inner-card ">
														<Image src={hover} fluid alt="cardhover"/>
													</div>
													<Image variant="top" src={camp.image} fluid alt={camp.title}/>
												</Link>
												<Card.Body>
													<Link to={camp.slug}>{camp.title}</Link>
												</Card.Body>
											</Card>
										)}
										</Col>		
									)} 
									</>
								) : ("")}
						
							
						</Row>	
					</Container>	
				</section>
				<section className="Sport-section-4">
					<Container>
						<div className="title-main mb-0">
							{(this.state.result === 1) ? (<><h2>{this.state.PageDataOther.program.bottom_title}</h2></>) : ("")}
						</div>
						{(this.state.result === 1) ? (<><p className="font-15 font-medium color-3b" dangerouslySetInnerHTML={{ __html: this.state.PageDataOther.program.bottom_desc}} /></>) : ("")}
						
					</Container>
				</section>	
				 
				  <BottomForm/>
				  <Footer/>
				</>
			  </Layout>
		)
	}
}
export default Partner