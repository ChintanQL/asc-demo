import React, {Component} from 'react';

import { Link } from 'gatsby'
import Layout from "../components/layout"
import card1 from '../images/resource-all-video-card.png'
import cardguide from '../images/resource-video-card-2.png'
import axios from 'axios';
import {Container,Breadcrumb,Tab,Nav,Col,Card,Image,Row} from 'react-bootstrap'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import Footer from "../components/common/Footer"
import BottomForm from "../components/common/BottomForm"
import { Helmet } from "react-helmet"
class resources extends Component {
	
	constructor(props) {
		super(props);
		console.log(this.props);
    }
	
	state = {
		PageData: [],
		blog: [],
		guide: [],
		flyer: [],
		Done:0,
		showInfo: 0
	}
	
	componentDidMount() {
		var url = "https://staging-ascstaging.kinsta.cloud/wp-json/newasc/v1/latest";
		axios.get(url).then(e => {
			this.setState({pagedata: e.data.ResponseData})
			this.setState({blog: e.data.ResponseData.Blog})
			this.setState({guide: e.data.ResponseData.Guide})
			this.setState({flyer: e.data.ResponseData.Flyer})
			this.setState({showInfo: 1})
		})
	}
	
	
	render() {
		return (
			<Layout>
            <>
			<Helmet>
				<title>Resources -School Hoilday Programs | Australian Sports Camps</title>
				<meta name="title" content="Resources -School Hoilday Programs | Australian Sports Camps"></meta>
				<meta property="og:title" content="Resources -School Hoilday Programs | Australian Sports Camps"></meta>
				<meta property="twitter:title" content="Resources -School Hoilday Programs | Australian Sports Camps"></meta>

				<meta name="description" content="Discover our resources and get access to articles, videos, and guides to learn the latest techniques, tips, drills in all sports. Sports camps across Australia."></meta>
				<meta property="og:description" content="Discover our resources and get access to articles, videos, and guides to learn the latest techniques, tips, drills in all sports. Sports camps across Australia."></meta>
				<meta property="twitter:description" content="Discover our resources and get access to articles, videos, and guides to learn the latest techniques, tips, drills in all sports. Sports camps across Australia."></meta>

				<meta name="keywords" content="basket drill, fun netball drills for juniors, netball passing drills for beginners, simple basketball drills, Cricket Drills, net ball drills. netball conditioning drills, drills for kids, Sports resources, AFL Football Drills"></meta>

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
							<Breadcrumb.Item active href="/resources" className="">Resources</Breadcrumb.Item>
						</Breadcrumb>
						<h2 className="heading-banner">Resources</h2>
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
									<Nav.Link  href="/resources" className="uppercase font-bold nav-link active">All</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link  href="/blog" className="uppercase font-bold">Blogs</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link href="/videos" className="uppercase font-bold ">Videos</Nav.Link>
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
									<section className="Resource-all">
                <Container>
                    <div className="Resource-all-data">

                        <Row className="">
						   {(this.state.blog != "") ? (<>
								{this.state.blog.map((prop,i) => {return (
									<Col xl={12} lg={12} md={12} className="mb-30 resource-card-col">
										<Card className="resource-card mb-0 all">
											<Link to={"/blog/"+prop.slug} className="card-img">
												<Image src={prop.image} fluid alt="" className="" />
											</Link>
											<Card.Body>
												<Card.Title as="h5" dangerouslySetInnerHTML={{ __html: prop.title}} />
												<Card.Text as="div" className="" dangerouslySetInnerHTML={{ __html: prop.Desc.substring(0, 250)+"...."}} />
													
												<Link className="nav-link p-0 d-flex align-items-center" to={"/blog/"+prop.slug}>Read more 
													<i className="fa fa-chevron-right ml-2"></i> 
												</Link>
											</Card.Body>
										</Card>
									</Col>	
								)})}
							
						   </>) : ("")}		
                        </Row>
						
						<Row className="">
						   {(this.state.guide != "") ? (<>
								{this.state.guide.map((prop,i) => {return (
									<Col xl={4} lg={4} md={6} className="mb-30 resource-card-col">
										<Card className="resource-card mb-0 all">
											<Link  to={"/guide/"+prop.slug} className="card-img">
												<Image src={prop.image} fluid alt="" className="" />
											</Link>
											<Card.Body>
												<Card.Title as="h5" dangerouslySetInnerHTML={{ __html: prop.title}} />
												<Card.Text as="div" className="" dangerouslySetInnerHTML={{ __html: prop.Desc.substring(0, 250)+"...."}} />
													
												<Link className="nav-link p-0 d-flex align-items-center" to={"/guide/"+prop.slug}>Read more 
													<i className="fa fa-chevron-right ml-2"></i> 
												</Link>
											</Card.Body>
										</Card>
									</Col>	
								)})}
							
						   </>) : ("")}		
                        </Row>
						
						<Row className="">
						   {(this.state.flyer != "") ? (<>
								{this.state.flyer.map((prop,i) => {return (
									<Col xl={6} lg={6} md={6} className="mb-30 resource-card-col">
										<Card className="resource-card mb-0 all">
											<Link to={"/flyer/"+prop.slug} className="card-img">
												<Image src={prop.image} fluid alt="" className="" />
											</Link>
											<Card.Body>
												<Card.Title as="h5" dangerouslySetInnerHTML={{ __html: prop.title}} />
												<Card.Text as="div" className="" dangerouslySetInnerHTML={{ __html: prop.Desc.substring(0, 250)+"...."}} />
													
												<Link className="nav-link p-0 d-flex align-items-center" to={"/flyer/"+prop.slug}>Read more 
													<i className="fa fa-chevron-right ml-2"></i> 
												</Link>
											</Card.Body>
										</Card>
									</Col>	
								)})}
							
						   </>) : ("")}		
                        </Row>
						

                       
                    </div>
                </Container>
            </section>
                            </Tab.Pane>
                           
                        </Tab.Content>
                    </Tab.Container>
                
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

export default resources
