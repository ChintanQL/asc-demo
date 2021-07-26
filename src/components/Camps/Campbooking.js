import React from "react"
import axios from "axios"
import {Container,Image, Row,Col,Card} from 'react-bootstrap'
import { Link, StaticQuery, graphql } from 'gatsby'
import Menubanner from '../common/Menubanner'
import Blogbanner from '../common/Blogbanner'
import LazyLoad from 'react-lazyload';

class Campbooking extends React.Component{
	constructor(props) {
		super(props);
	}
	state = {
        pagedata: [],
		showInfo: 0,
		query_code:"",
		name:"",
		code:"",
		count:0,
		shown: "d-none"
    };
	componentDidMount() {
		var cat = this.props.category;
		var wid = this.props.wid;
		var name = this.props.name;
		this.setState({name: name})
		
		var url = "https://staging-ascstaging.kinsta.cloud/wp-json/newasc/v1/cat-products/"+cat+"?id="+wid;
		axios.get(url).then(e => {
			this.setState({pagedata: e.data.ResponseData.Camp})
			this.setState({showInfo: 1})
			this.setState({count: e.data.ResponseData.Count})
		})
		
		
		
		
    }

	render (){
		return(
			<>
			<div className="laoder2" style={{ display: this.state.showInfo == 0 ? "block" : "none" }} >
				<div id="preloader" aria-busy="true" aria-label="Loading, please wait." role="progressbar">
					<img alt="" className="icon" src="https://staging-ascstaging.kinsta.cloud/demo.svg" />
				</div>
			</div>
			{(this.state.showInfo == 1) ? (
				<>
					{(this.state.count != 0) ? (
						<>
						<Row className="justify-content-center mb-4">
									<Col xl={12} lg={12}>
										<div className="title">
											<h2>Select your camp below to book online now.</h2>
										</div>
									</Col>
								</Row>
								<Row className="">
									
							{(this.state.pagedata != "") ? (
								<>
									{this.state.pagedata.map((prop,i) => {return (
										<Col xl={4} lg={4} md={6} sm={9} xs={12} className="main-book-card">
											<Card className="book-card">
												<LazyLoad height={200} once >
												<div className="card-img">
													<div dangerouslySetInnerHTML={{ __html: prop.Html}} />
												</div>
												</LazyLoad>
												<Card.Body>
													<Card.Title as="h5">
														{prop.Name}
													</Card.Title>
													<Card.Text>
														{prop.Camp_Date}
													</Card.Text>
													<Card.Text>
														{prop.Camp_Venue}
													</Card.Text>
													
													{(prop.Flag == 1) ? (
														<ul>
															<li className="cross-price">${prop.regular_price}</li>
															<li className="main-price">${prop.sale_price}</li>
														</ul>
													) : (
														<ul>
															<li className="main-price">${prop.price}</li>
														</ul>
													)}
													
													
													
													<Link className="nav-link uppercase btn-sm btn-orange text-center" to={"https://staging-ascstaging.kinsta.cloud/book/"+prop.Slug}>More info / Book Now</Link>
												</Card.Body>
											</Card>
										</Col>
									)})}
								</>
							) : ("")}	
							</Row>
						</>
					
					) : (
						<div className=""  >
							<div className="No-camp-section-2">
								<div className="container">
									<div className="title mb-30">
										<h2>
											SELECT A SPORT TO VIEW AND BOOK CAMPS
										</h2>
										<p className="text-center">
											No camps or programs were found matching your selection.
										</p>
									</div>
									<div className="title">
										<h2>
											Notify Me
										</h2>
										<p className="text-center">
											Please fill your email to get notified when similar camps are available again.
										</p>
									</div>
								</div>
							</div>
							<section className="No-camp-section-3">
								<div className="container">
									<div className="row">
										<div className="col-xl-8 col-lg-8 col-md-7 md-mb-4">
											<iframe src={"https://staging-ascstaging.kinsta.cloud/gravity-notify/?camp_state=&camp_sports="+this.state.name} frameBorder="0" width="100%" height="470" ></iframe>
										</div>
										<div className="col-xl-4 col-lg-4 col-md-5 secc">
											<Blogbanner />
											<div className="callbtnblue"><a href="tel:1300914368"><span>call on   </span>1300914368</a></div>
										</div>
									</div>
								</div>
							</section>
						</div>
					
					)}
				
				</>
			
			) : ("")}
			
			
			</>
		)
	}	

}

export default Campbooking