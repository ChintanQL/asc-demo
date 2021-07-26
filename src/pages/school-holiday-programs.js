import React, { Component  } from 'react';
import { Link } from 'gatsby'
import axios from 'axios';
import { Container,Image,Row,Col,Button,Modal,Card,Breadcrumb } from 'react-bootstrap';
import playbutton from '../images/play-button.png'
import Iframe from 'react-iframe'
import Layout from "../components/layout"
import cardhover from '../images/card-hover-img.png'
import hover from '../images/Hover_Img.png'
import { Helmet } from "react-helmet"
import Footer from "../components/common/Footer"
import BottomForm from "../components/common/BottomForm"
import lifes from '../images/lifes-better-with-sport.png'
class SHP extends Component {
    
	constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
        this.state={
            isOpen:false,
        }
        this.modalOpen = this.modalOpen.bind(this);
        this.modalClose = this.modalClose.bind(this);
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

	handleLoginClick() {
    this.setState({Isbanner: 0});
  }
	
	
	state = {
		PageData: [],
		city: [],
		Isbanner: 0,
		showInfo: 0
	}
	
	componentDidMount() {
		axios({
			url: 'https://staging-ascstaging.kinsta.cloud/wp-json/newasc/v1/get_data_program',
			method: 'get'
		}).then(res => {
			
			const chunkSize = 2;
			const arr = res.data.ResponseData.city;
			const groups = arr.map((e, i) => { 
				 return i % chunkSize === 0 ? arr.slice(i, i + chunkSize) : null; 
			}).filter(e => { return e; });
			console.log({arr, groups});	
			
			
			this.setState({PageData: res.data.ResponseData.data[0]})
			this.setState({city: groups})
			this.setState({showInfo: 1})
		})
	}
	
	
	render() {      
        return (
		<Layout>
            <>
			<Helmet>
				<title>School Holiday Programs  Australia-Australian Sports Camps</title>
				<meta name="title" content="School Holiday Programs  Australia-Australian Sports Camps"></meta>
				<meta property="og:title" content="School Holiday Programs  Australia-Australian Sports Camps"></meta>
				<meta property="twitter:title" content="School Holiday Programs  Australia-Australian Sports Camps"></meta>

				<meta name="description" content="ASC runs three-day school holiday programs & camps in Australia over school holiday periods. For kids aged 5-15, we offer all major Aussie sports."></meta>
				<meta property="og:description" content="ASC runs three-day school holiday programs & camps in Australia over school holiday periods. For kids aged 5-15, we offer all major Aussie sports."></meta>
				<meta property="twitter:description" content="ASC runs three-day school holiday programs & camps in Australia over school holiday periods. For kids aged 5-15, we offer all major Aussie sports."></meta>

				<meta name="keywords" content="School Holiday Program, School Holiday Program Australia, Holiday Program, School Holiday Program for Kids, Table Tennis School Holiday Program, Camp Australia Holiday Program, Golf School Holiday Program, Kids School Holiday Program, Holiday Program for Kids, Sports Holiday Program"></meta>

				<meta property="og:type" content="website"></meta>
				<meta property="twitter:card" content="summary_large_image"></meta>


			</Helmet>
				<div className="laoder" style={{ display: this.state.showInfo == 0 ? "block" : "none" }} >
					<div id="preloader" aria-busy="true" aria-label="Loading, please wait." role="progressbar">
						<img alt="" className="icon" src="https://staging-ascstaging.kinsta.cloud/demo.svg" />
					</div>
				</div>
			
			{(this.state.showInfo == 1) ? (
				<>
				<section className="Banner-Section">
					<Container>
						<div className="Banner-Section-data">
						<Breadcrumb>
							<Breadcrumb.Item className="">
								<Link className="nav-link p-0" to="/">Home</Link>
								</Breadcrumb.Item>
							<Breadcrumb.Item active href="" className="">School Holiday Programs</Breadcrumb.Item>
						</Breadcrumb>
						<h2 className="heading-banner">School Holiday Programs</h2>
						</div>
					</Container>
				</section>
				
				<section className="Sport-section-3 mt-5">
					<Container>
						<Row>
							{(this.state.showInfo === 1) ? (
									<>
									{this.state.city.map((cmp) => 
										 <Col xl={4} lg={4} md={7} sm={9} xs={10} className="main-styled-card">
										{cmp.map((camp) => 
											 <div className="listed-card mb-0 card">
												<Link to={"/school-holiday-programs/"+camp.slug} className="card-img">
													<div className="inner-card ">
														<Image src={hover} fluid alt="cardhover"/>
													</div>
													<Image variant="top" src={camp.img} fluid alt={camp.title}/>
												</Link>
												<Card.Body>
													<Link to={"/school-holiday-programs/"+camp.slug}>{camp.title}</Link>
												</Card.Body>
											</div>
										)}
										</Col>		
									)} 
									</>
								) : ("")}
						
							
						</Row>	
					</Container>	
				</section>
				<section className="Batman-Section">
					<Container>
					<div className="title mb-0">
						<Row className="justify-content-center">
							<Col xl={9} lg={11}>
								<h2>{this.state.PageData.school_holiday_program.title}</h2>
								
							</Col>
						</Row>
					</div>
					<div className="Batman-Section-data mt-0">
						<Row className="justify-content-center align-items-center">
							<Col xl={4} lg={4} md={12} className="justify-content-center d-flex lg-mb-2">
								<Image src={this.state.PageData.school_holiday_program.image} fluid alt="cardhover" className="batman" />
							</Col>
							<Col xl={8} lg={8} md={12}>
								<div className="pl-3 pr-2">
									<p className="font-15 font-medium color-3b mb-30" dangerouslySetInnerHTML={{ __html: this.state.PageData.school_holiday_program.desc}} />
										
									
									
									<Link className=" uppercase btn-sm btn-orange-large" to="/book-a-camp" >BOOK A CAMP TODAY</Link>
								</div>                        
							</Col>
						</Row>
					</div>
					</Container>
				</section>
				<section className="Batman-Section">
					<Container>
					<div className="title mb-0">
						<Row className="justify-content-center">
							<Col xl={9} lg={11}>
								<h2>{this.state.PageData.upcoming.title}</h2>
								
							</Col>
						</Row>
					</div>
					<div className="Batman-Section-data mt-0">
						<Row className="justify-content-center align-items-center">
							<Col xl={4} lg={4} md={12} className="justify-content-center d-flex lg-mb-2">
								<Image src={this.state.PageData.upcoming.image} fluid alt="cardhover" className="batman" />
							</Col>
							<Col xl={8} lg={8} md={12}>
								<div className="pl-3 pr-2">
									<p className="font-15 font-medium color-3b mb-30" dangerouslySetInnerHTML={{ __html: this.state.PageData.upcoming.desc}} />
										
									
									
									
								</div>                        
							</Col>
						</Row>
					</div>
					</Container>
				</section>
				<section className="Modal-section">
                <Container>
                    <div className="title">
                        <Row className="justify-content-center">
                            <Col xl={9} lg={11}>
                                <h2>{ this.state.PageData.how_does_it_work.title}</h2>
                                <p dangerouslySetInnerHTML={{ __html: this.state.PageData.how_does_it_work.desc}} />
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
                    <Iframe url={this.state.PageData.how_does_it_work.youtube_url} width="100%" height="400px" id="video_id" className=""  
                    display="initial" position="relative"/>
                </Modal.Body>
            </Modal>
			 <section className="Included-section">
                <Container>
                    <div className="title">
                        <Row className="justify-content-center">
                            <Col xl={9} lg={11}>
                                <h2>WHAT'S INCLUDED</h2>
                            </Col>
                        </Row>
                    </div>
                    <Row>
					
						{this.state.PageData.whats_included.map((inc) => 
							<Col xl={4} lg={4} md={6} className="mb-30">
								<Card className="icon-card">
									<div className="card-img">
										<Image src={inc.image} fluid alt="cardhover" width="100" height="100" />
									</div>
									<Card.Body>
										<Card.Title as="h5">{inc.title}</Card.Title>
										<Card.Text className="" dangerouslySetInnerHTML={{ __html: inc.desc}} />
									</Card.Body>
								</Card>
							</Col>
						)}    
					
                        
                        
                    </Row>

                    <div className="text-center">
                        <Link className=" uppercase btn-sm btn-orange-large" to="/book-a-camp">BOOK A CAMP TODAY</Link>
                    </div>
                </Container>
            </section>
			 <section className="Kid-section">
                <div className="Kid-section-first">
                    <Container>
                        <Row className="align-items-center">
                            <Col xl={6} lg={6} className="kid-image">
                                <div className="">
                                    <Image src={this.state.PageData.bottom_kids_review.image} fluid alt="cardhover" />
                                </div>
                            </Col>
                            <Col xl={6} lg={6} className="text-center kids-data">
                                <p className="mb-30 font-22 font-semibold text-white" dangerouslySetInnerHTML={{ __html: this.state.PageData.bottom_kids_review.desc}} />
                                 <div className="camptestimonialsec_logo"> <Image src={lifes} alt="cardhover" /></div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="Kid-section-second">
                    <Container>
                        <div className="title">
                            <h2 className="uppercase">{this.state.PageData.bottom_kids_review.sub_title_1}</h2>
                            <h2 className="uppercase">{this.state.PageData.bottom_kids_review.sub_title_2}</h2>
                        </div>
                        <div className="text-center">
                            <Link className=" uppercase btn-sm btn-orange-large" to="/book-a-camp" >BOOK A CAMP TODAY</Link>
                        </div>
                    </Container>
                </div>
            </section>
			</>
			) : ("")} 
			 <BottomForm/>
				  <Footer/>
            </>
			 </Layout>
        );
    }
}

export default SHP;