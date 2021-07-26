import React, {Component} from 'react';
import {Container,Breadcrumb,Accordion,Card,Button} from 'react-bootstrap'
import { Link } from 'gatsby'
import Layout from "../../components/layout"
import Footer from "../../components/common/Footer"
import BottomForm from "../../components/common/BottomForm"
import axios from 'axios';
import { Helmet } from "react-helmet"
class FAQ extends Component {
	
	
	
	
	state = {
		PageData: [],
		result: 0,
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
	
	componentDidMount() {
		axios({
			url: 'https://staging-ascstaging.kinsta.cloud/graphql',
			method: 'post',
			data: {
				query: `
					query MyQuery {
						page(id: "30", idType: DATABASE_ID) {
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
							faq {
								faq {
									answer
									fieldGroupName
									question
									
								}
							}
						}
					}
				`
			}
		}).then(res => {
			this.setState({PageData: res.data.data.page.faq})
			this.setState({result: 1})
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
			console.log(res.data.data);
		})
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
  
  
  
	render() {
		return (
			<Layout>
            <>
			<Helmet>
				<title>FAQs (Frequently Asked Questions) - Australian Sports Camps</title>
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
								<Breadcrumb.Item active href=""className="">FAQ</Breadcrumb.Item>
							</Breadcrumb>
							<h2 className="heading-banner">FAQS (FREQUENTLY ASKED QUESTIONS)</h2>
						</div>
					</Container>
				</section>
				<section className="Faq-Section-2">
					<Container>
						<div className="Faq-Section-2-data accordian-div">
							<Accordion defaultActiveKey="1">
								{(this.state.result === 1) ? (
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
												<Card.Body className="font-16" dangerouslySetInnerHTML={{ __html: str.answer}} />
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
export default FAQ
