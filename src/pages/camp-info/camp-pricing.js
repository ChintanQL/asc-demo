import React, {Component} from 'react';
import {Container,Breadcrumb,Col,Row,Card,Image} from 'react-bootstrap'
import Layout from "../../components/layout"
import { Link } from 'gatsby'
import Footer from "../../components/common/Footer"
import BottomForm from "../../components/common/BottomForm"
import Campbanner from "../../components/common/Campbanner"
import card1 from '../../images/card1.png'
import cardhover from '../../images/card-hover-img.png'
import axios from 'axios';
import { Helmet } from "react-helmet"
import queryString from 'query-string'
import Cookies from 'universal-cookie';

class CampPricing extends Component {
	
	state = {
		PageData: [],
		result: 0,
		showInfo: 0,
		
	}
	
	componentDidMount() {
		axios({
			//url: 'https://staging-ascstaging.kinsta.cloud/wp-json/newasc/v1/camps',
			url: 'https://staging-ascstaging.kinsta.cloud/wp-json/newasc/v1/camp_pricing',
			method: 'get'}).then(res => {
			this.setState({PageData: res.data.ResponseData.data[0]})
			
			this.setState({result: 1})
			this.setState({showInfo: 1})
			
		})
		
		
		
	}
	
	render() {
		return (
			  <Layout>
				<>
				<Helmet>
				<title>Camp Pricing - Australian Sports Camps</title>
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
							<Breadcrumb.Item active href=""className="">Camp Pricing</Breadcrumb.Item>
						</Breadcrumb>
						<h2 className="heading-banner">Camp Pricing</h2>
						</div>
					</Container>
				</section>
				<section className="Camp_pricesec1">
					<div className="container">
						<div className="title text-center mb-lg-5 mb-md-4 mb-3">
							{(this.state.result === 1) ? (<><h2>{this.state.PageData.title}</h2></>) : ("")}
						</div>
						<div className="row">
						{(this.state.result === 1) ? (<>
						
							{this.state.PageData.pricing.map((cmp) => 
								<div className="col-sm-12 col-md-6 col-lg-6">
									<div className="camppric_twocolbx text-center">
										<div className="camppricimg mb-2 mb-md-3 mb-lg-5"><Image src={cmp.image} alt=""/></div>
										<h2 className="font-bold">{cmp.title}</h2>
										<p className="font-22 font-medium color-3b mb-2 mb-md-3 mb-lg-4">{cmp.sub_title}</p>
										<div className="" dangerouslySetInnerHTML={{ __html: cmp.desc}} />
										<div className="camppricetxt font-bold font-30">{cmp.rate}</div>
										<div classname="text-center">
											<Link to={cmp.button_url} className="uppercase btn-orange-large">BOOK NOW</Link>
										</div>
									</div>
								 </div>
							)} 
						
						</>) : ("")}
						
						
							
							
						</div>
					</div>
				</section>
					<section className="Camp_pricesec2">
						<div className="container">
							<div className="title">
								{(this.state.result === 1) ? (<><h2 className="mb-3 mb-md-3 mb-lg-5" >{this.state.PageData.title_2}</h2></>) : ("")}
								{(this.state.result === 1) ? (<><div className="mb-0 text-left" dangerouslySetInnerHTML={{ __html: this.state.PageData.desc_2}} /></>) : ("")}
								
							</div>
						</div>
						
					</section>
					<section className="Camp_pricesec2">
						<div className="container">
							<div className="title">
								{(this.state.result === 1) ? (<><h2 className="mb-3 mb-md-3 mb-lg-5" >{this.state.PageData.title_3}</h2></>) : ("")}
								{(this.state.result === 1) ? (<><div className="mb-0 text-left" dangerouslySetInnerHTML={{ __html: this.state.PageData.desc_3}} /></>) : ("")}
								
							</div>
						</div>
						
					</section>
					<section className="Camp_pricesec2">
						<div className="container">
							<div className="title">
								{(this.state.result === 1) ? (<><h2 className="mb-3 mb-md-3 mb-lg-5" >{this.state.PageData.title_4}</h2></>) : ("")}
								{(this.state.result === 1) ? (<><div className="mb-0 text-left" dangerouslySetInnerHTML={{ __html: this.state.PageData.desc_4}} /></>) : ("")}
								
							</div>
						</div>
						
					</section>
					<section className="Camp_pricesec3">
						<div className="container">
							<div className="title">
								{(this.state.result === 1) ? (<><h2 className="mb-3 mb-md-3 mb-lg-5" >{this.state.PageData.title_5}</h2></>) : ("")}
							</div>
						   <div className="campfrienddiscountbx">
								<div className="row">
									<div className="col-lg-8 col-md-8 col-sm-12">
									   {(this.state.result === 1) ? (<><div className="font-20 font-medium color-3b" dangerouslySetInnerHTML={{ __html: this.state.PageData.desc_5}} /></>) : ("")}
									   
									</div>
									<div className="col-lg-4 col-md-4 col-sm-12">
										<div className="campfriendpricimg">
										 {(this.state.result === 1) ? (<><img src={this.state.PageData.side_image} alt="" className="img-fluid" /></>) : ("")}
										</div>
									</div>
								</div>
							</div>
							<div className="camoricediscounttxt mt-2 mt-md-3 mt-lg-5">
								{(this.state.result === 1) ? (<><div className="font-italic font-medium" dangerouslySetInnerHTML={{ __html: this.state.PageData.disclamer}} /></>) : ("")}
							</div>
						</div>
					</section>
				
				 
				  <BottomForm/>
				  <Footer/>
				</>
			  </Layout>
		)
	}
}
export default CampPricing