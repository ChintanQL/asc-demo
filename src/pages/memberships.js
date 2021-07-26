import React, {Component} from 'react';
import {Container,Breadcrumb,Row,Col,Card,Image,Button,Accordion} from 'react-bootstrap'
import { Link } from 'gatsby'
import Layout from "../components/layout"
import Footer from "../components/common/Footer"
import BottomForm from "../components/common/BottomForm"
import axios from 'axios';
import { Helmet } from "react-helmet"
import Cookies from 'universal-cookie';

class Membership extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
    }
	
	state = {
		PageData: [],
		Done: 0,
		showInfo: 0,
		title:"",
		description:"",
		keywords:"",
		og_type:"",
		og_title:"",
		og_description:"",
		twitter_card:"",
		twitter_title:"",
		twitter_description:""
	}
	handleToggle = (id) => {
        document.querySelectorAll('.card:not(.id'+id+')').forEach(function(button) {	
			if(!button.classList.contains(".id"+id)){
				button.classList.remove('active');
			}
		});
		if (document.querySelector(".id"+id).classList.contains('active')) {
		  document.querySelector(".id"+id).classList.remove('active');
		} else {
		  document.querySelector(".id"+id).classList.add('active');
		}
    } 
	componentDidMount() {
		axios({
			url: 'https://staging-ascstaging.kinsta.cloud/graphql',
			method: 'post',
			data: {
				query: `
					query MyQuery {
						page(id: "123761", idType: DATABASE_ID) {
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
						  Membership {
							howItWorks
							subTitle
							termsConditions
							title
							topDesc
						
							faq {
							  answers
							  question
							}
							memberships {
								campTitle
								class
								months
								price
								save
								strikePrice
								title1
								title2
								title3
								title4
								url
								icon {
								  sourceUrl
								}
							  }
							  steps {
								stepName
								subtitle
								title
								image {
								  sourceUrl
								}
							  }
						  }
						}
					}
				`
			}
		}).then(res => {
			this.setState({PageData: res.data.data.page.Membership})
			this.setState({Done:1})
			this.setState({showInfo: 1})
			this.setState({title: res.data.data.page.seo.title})
			this.setState({description: res.data.data.page.seo.metaDesc})
			this.setState({keywords: res.data.data.page.seo.metaKeywords})
			this.setState({og_type: "website"})
			this.setState({og_title: res.data.data.page.seo.opengraphTitle})
			this.setState({og_description: res.data.data.page.seo.opengraphDescription})
			this.setState({twitter_card: "summary_large_image"})
			this.setState({twitter_title: res.data.data.page.seo.twitterTitle})
			this.setState({twitter_description: res.data.data.page.seo.twitterDescription})
			console.log(res);
		})
		
		/*after page load segment hook*/
		/*const cookies = new Cookies();
		var page_name  = 'Viewed Membership Page';
		var res  = '';
		var path  = '/memberships/';
		var url_v  = 'https://staging-ascstaging.kinsta.cloud/memberships/';
		if(cookies.get('LOGIN') == 1){
			var login_name = cookies.get('EMAIL');
		}
		else{
			var login_name = "";
		}
		
		
		var url = "https://staging-ascstaging.kinsta.cloud/wp-json/newasc/v1/page_view";
		axios.post(url,{path:path,url:url_v,user:login_name,page_name:page_name,res:res}).then(e => {
			console.log("done");
		})*/
		
	}
  
  render() {
      return (
			<Layout>
				<>
				<Helmet>
				<title>Membership Pass - Australian Sports Camps</title>
				<meta name="title" content={this.state.title}></meta>
					<meta name="description" content={this.state.description}></meta>
					<meta name="keywords" content={this.state.keywords}></meta>
					<meta property="og:type" content="website"></meta>
					<meta property="og:title" content={this.state.og_title}></meta>
					<meta property="og:description" content={this.state.og_description}></meta>
					<meta property="twitter:card" content="summary_large_image"></meta>
					<meta property="twitter:title" content={this.state.twitter_title}></meta>
					<meta property="twitter:description" content={this.state.twitter_description}></meta>
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
							
								<Breadcrumb.Item active href="#"className="">Membership pass</Breadcrumb.Item>
							</Breadcrumb>
							<h2 className="heading-banner">Membership pass</h2>
							</div>
						</Container>
					</section>
					<section className="Membership-section-2">
						<Container>
							<div className="Membership-section-2-data">
								<div className="title mb-0">
									
									{(this.state.PageData) ? (<h2 className="uppercase">{this.state.PageData.title}</h2>) : ("")}
								</div>
								{(this.state.PageData) ? (<div className="text-center list-style-disc font-18 font-medium mb-30" dangerouslySetInnerHTML={{ __html: this.state.PageData.subTitle}} ></div>) : ("")}
								
								{(this.state.PageData) ? (<div className="text-center list-style-disc font-18 font-medium mb-30" dangerouslySetInnerHTML={{ __html: this.state.PageData.topDesc}} ></div>) : ("")}
								
								
							</div>
						</Container>
					</section>
					<section className="Membership-section-3">
						<Container>
							<div className="Membership-section-3-data">
								<Row className="justify-content-center">
									
									{(this.state.Done !== 0) ? (
										<>
											{this.state.PageData.memberships.map((str,i) => 
												<>
												<Col xl={4} lg={4} md={4}>
													<Card className="subscription-card">
														<div className={str.class+" save-tag"}>
															{str.save}
														</div>
														<div className="card-img text-center">
															<Image src={str.icon.sourceUrl} fluid alt="" width="150" height="150" />
														</div>
														<Card.Body className="text-center px-0 pb-0">
															<Card.Title as="h5">{str.campTitle}</Card.Title>
															<Card.Text as="p" className="font-18 font-bold color-3b">{str.months}</Card.Text>
															<p className="points font-16 font-medium">{str.title1} </p>
															<p className="points font-16 font-medium">{str.title2}</p>
															<p className="points font-16 font-medium">{str.title3}</p>
															<p className="points font-16 font-medium mb-20">{str.title4}</p>
															<Card.Title as="h5">${str.price}</Card.Title>
															<p className="price color-3b font-18 font-medium">${str.strikePrice}</p>
															<Link className=" uppercase btn-sm btn-orange btnpadding" to={str.url}>Buy Now</Link>
														</Card.Body>
													</Card>
												</Col>
												</>
											)}
										</>
									) : ("")}
								</Row>
							</div>
						</Container>
					</section>
					<section className="Membership-section-4">
						<Container>
							<div className="Membership-section-4-data">
							<div className="title">
								<h2 className="uppercase">Terms & Conditions</h2>
							</div>
							{(this.state.PageData) ? (<div className="text-center list-style-disc font-18 font-medium mb-30" dangerouslySetInnerHTML={{ __html: this.state.PageData.termsConditions}} ></div>) : ("")}
							</div>
						</Container>
					</section>
					<section className="Membership-section-5">
						<Container>
							<div className="Membership-section-5-data">
								<div className="title mb-0">
									<h2 className="uppercase">How It Works</h2>
								</div>
								{(this.state.PageData) ? (<div className="text-center list-style-disc font-18 font-medium mb-30" dangerouslySetInnerHTML={{ __html: this.state.PageData.howItWorks}} ></div>) : ("")}
							</div>
						</Container>
					</section>
					<section className="Membership-section-6">
						<Container>
							<div className="Membership-section-6-data">
								<Row>
									
									{(this.state.Done !== 0) ? (
										<>
											{this.state.PageData.steps.map((str,i) => 
												<>
												<Col xl={4} lg={4} md={12} className="lg-mb-4">
													<div className="steps-data justify-content-center d-block text-center">
														<h3 className="font-medium mb-3">{str.stepName}</h3>
														<Image src={str.image.sourceUrl} fluid alt="" className="mb-3" width="100" height="100" />
														<h3 className="font-medium mb-1">{str.title}</h3>
														<h3 className="font-bold mb-0">{str.subtitle}</h3>
													</div>
												</Col>
												</>
											)}
										</>
									) : ("")}
								</Row>
							</div>
						</Container>
					</section>
					<section className="Membership-section-7">
						<Container>
							<div className="Membership-section-7-data accordian-div">
								<h2 className="font-bold color-3b text-center">FAQS (FREQUENTLY ASKED QUESTIONS)</h2>

								<Accordion defaultActiveKey="1">
									
									{(this.state.Done !== 0) ? (
									<>
									{this.state.PageData.faq.map((str,i) => 
										<>
										<Card  className={"p-0 mb-4 id"+i}>
											<Card.Header>
												<Accordion.Toggle className="font-18 font-medium p-0" as={Button} onClick={() => {this.handleToggle(i)}} variant="link" eventKey={'"'+i+'"'}>
													{str.question}
												</Accordion.Toggle>
											</Card.Header>
											<Accordion.Collapse eventKey={'"'+i+'"'}>
												<Card.Body className="font-16 font-regular" dangerouslySetInnerHTML={{ __html: str.answers}} />
											</Accordion.Collapse>
										</Card>
										</>
									)}
									</>
								) : ("")}
									
									
									
									
								</Accordion>
							</div>
						</Container>
					</section>
              
             
              <BottomForm/>
              <Footer/>
            </>
          </Layout>
      )
  }
}
export default Membership