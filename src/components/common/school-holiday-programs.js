import React, { Component  } from 'react';
import { Link } from 'gatsby'
import axios from 'axios';
import { Container,Image,Row,Col,Button,Modal,Card } from 'react-bootstrap';
import playbutton from '../../images/play-button.png'
import Iframe from 'react-iframe'


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
		Isbanner: 0,
		showInfo: 0
	}
	
	componentDidMount() {
		axios({
			url: 'https://staging-ascstaging.kinsta.cloud/wp-json/newasc/v1/get_data_program',
			method: 'get'
		}).then(res => {
			this.setState({PageData: res.data.ResponseData[0]})
			this.setState({showInfo: 1})
		})
	}
	
	
	render() {      
        return (
		<Layout>
            <>
			<div className="laoder" style={{ display: this.state.showInfo == 0 ? "block" : "none" }} >
					<div id="preloader" aria-busy="true" aria-label="Loading, please wait." role="progressbar">
						<img alt="" className="icon" src="https://staging-ascstaging.kinsta.cloud/demo.svg" />
					</div>
				</div>
			<div className="" style={{ display: this.state.showInfo == 0 ? "none" : "block" }} >
			{(this.state.showInfo == 1) ? (
				<>
				<section className="Batman-Section">
					<Container>
					<div className="title mb-0">
						<Row className="justify-content-center">
							<Col xl={9} lg={11}>
								<h2>{this.state.PageData.school_holiday_program.title}</h2>
								
							</Col>
						</Row>
					</div>
					<div className="Batman-Section-data">
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
					<div className="Batman-Section-data">
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
			 
			</div>
            </>
			 </Layout>
        );
    }
}

export default SHP;