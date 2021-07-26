import React, {Component} from 'react';

import { Link } from 'gatsby'
import Layout from "../components/layout"

import axios from 'axios';
import {Container,Breadcrumb,Tab,Nav,Col,Card,Image,Row} from 'react-bootstrap'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import Footer from "../components/common/Footer"
import BottomForm from "../components/common/BottomForm"
import { Helmet } from "react-helmet"
class TNC extends Component {
	
	constructor(props) {
		super(props);
		console.log(this.props);
    }
	
	state = {
		PageData: [],
		Done:0,
		showInfo: 0
	}
	
	componentDidMount() {
		axios({
			url: 'https://staging-ascstaging.kinsta.cloud/graphql',
			method: 'post',
			data: {
				query: `
					query MyQuery {
						page(id: "150264", idType: DATABASE_ID) {
							videos {
								youtubeVideoLinks {
									fieldGroupName
									link
									title
								}
							}
						}
					}
				`
			}
		}).then(res => {
			this.setState({PageData: res.data.data.page.videos})
			this.setState({Done: 1})
			this.setState({showInfo: 1})
		})
	}
	
	
	render() {
		return (
			<Layout>
            <>
			<Helmet>
				<title>Videos - School Hoilday Programs | Australian Sports Camps</title>
				<meta name="title" content="Videos - School Hoilday Programs | Australian Sports Camps"></meta>
				<meta property="og:title" content="Videos - School Hoilday Programs | Australian Sports Camps"></meta>
				<meta property="twitter:title" content="Videos - School Hoilday Programs | Australian Sports Camps"></meta>

				<meta name="description" content="Our videos showcase the latest techniques in all sports. Sports camps for all major sports in Australia. We ensure your kids receive coaching at top facilities."></meta>
				<meta property="og:description" content="Our videos showcase the latest techniques in all sports. Sports camps for all major sports in Australia. We ensure your kids receive coaching at top facilities."></meta>
				<meta property="twitter:description" content="Our videos showcase the latest techniques in all sports. Sports camps for all major sports in Australia. We ensure your kids receive coaching at top facilities."></meta>

				<meta name="keywords" content="Australian Sports Camps, AFL Home Training, Soccer Home Training, Basketball Home Training, Basket Ball Training, Cricket Training, soccer training for kids, ASC Hocky Camps"></meta>

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
							<Breadcrumb.Item className="">
									<Link className="nav-link p-0" to="/resources">Resources</Link>
								</Breadcrumb.Item>	
								<Breadcrumb.Item active className="">
									<Link className="nav-link p-0" to="/videos">Videos</Link>
								</Breadcrumb.Item>		
							
						</Breadcrumb>
						<h2 className="heading-banner">Videos</h2>
						</div>
					</Container>
				</section>
				<section className="Resource-section-2">
                <Container>
                    <div className="Resource-Section-2-data">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="All">
                        <div className="p-0 border-0 justify-content-center d-flex mb-30">
							<Nav variant="pills" className="">
								<Nav.Item>
									<Nav.Link  href="/resources" className="uppercase font-bold">All</Nav.Link>
								</Nav.Item>
								 <Nav.Item>
									<Nav.Link  href="/blog" className="uppercase font-bold">Blogs</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link href="/videos" className="uppercase font-bold nav-link active">Videos</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link href="/guide" className="uppercase font-bold">Guides</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link href="/flyer" className="uppercase font-bold">Camp flyer</Nav.Link>
								</Nav.Item>
							</Nav>
                        </div>
                        <Tab.Content className="text-left">
                            <Tab.Pane eventKey="All">
                                
                            </Tab.Pane>
                           
                        </Tab.Content>
                    </Tab.Container>
                
                    </div>
                
						<div className="Blog-Section-2-data">
							<Row>
								{(this.state.Done !== 0) ? (
									<>
										{this.state.PageData.youtubeVideoLinks.map((str,i) => 
											<Col xl={6} lg={6} md={12} className="lg-mb-2 mb-3  mt-3">
											<Card className="resource-card mb-0 all">	
												<ResponsiveEmbed aspectRatio="16by9">
												<embed  src={str.link} />
											  </ResponsiveEmbed>
											  <Card.Body>
											 <Card.Title as="h5" dangerouslySetInnerHTML={{ __html: str.title}} />
											  </Card.Body>
											  </Card>
											</Col>
										)}
									</>
								) : ("")}
								
							</Row>
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

export default TNC
