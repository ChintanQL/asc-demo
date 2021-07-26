import React, { Component } from 'react';
import { Container,Row,Col,Button,Image } from 'react-bootstrap';
import { Link,StaticQuery, graphql } from 'gatsby'
import lifes from '../../images/lifes-better-with-sport.png'
class KidSection extends Component {
    render() {
        return (
            <>
            
            <section className="Kid-section">
                <div className="Kid-section-first">
                    <Container>
                        <Row className="align-items-center">
                            <Col xl={6} lg={6} className="kid-image">
                                <div className="">
                                    <Image src={this.props.data.image.sourceUrl} fluid alt="cardhover" />
                                </div>
                            </Col>
                            <Col xl={6} lg={6} className="text-center kids-data">
                                <p className="mb-30 font-22 font-semibold text-white" dangerouslySetInnerHTML={{ __html: this.props.data.desc}} />
								<div className="camptestimonialsec_logo"> <Image src={lifes} alt="cardhover" /></div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="Kid-section-second">
                    <Container>
                        <div className="title">
                            <h2 className="uppercase">{this.props.data.subTitle1}</h2>
                            <h2 className="uppercase">{this.props.data.subTitle2}</h2>
                        </div>
                        <div className="text-center">
                            <Link className=" uppercase btn-sm btn-orange-large" to="/book-a-camp" >BOOK A CAMP TODAY</Link>
                        </div>
                    </Container>
                </div>
            </section>

            </>
        );
    }
}

export default KidSection;
