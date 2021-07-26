import React, { Component } from 'react';
import { Container,Row,Col,Card,Image,Button } from 'react-bootstrap';
import { Link,StaticQuery, graphql } from 'gatsby'
class IncludedSection extends Component {
    render() {
        return (
            <>
            
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
					
						{this.props.data.inclusion.map((inc) => 
							<Col xl={4} lg={4} md={6} className="mb-30">
								<Card className="icon-card">
									<div className="card-img">
										<Image src={inc.image.sourceUrl} fluid alt="cardhover" width="100" height="100" />
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

            </>
        );
    }
}

export default IncludedSection;
