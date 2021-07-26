import React from "react"
import {Container,Breadcrumb,Row,Col} from 'react-bootstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from 'gatsby'
import { Helmet } from "react-helmet"
const NotFoundPage = () => (
  <Layout>
  <Helmet>
				<title>404 Error - Australian Sports Camps</title>
			</Helmet>
    <section className="Banner-Section">
		<Container>
			<div className="Banner-Section-data">
				<Breadcrumb>
					<Breadcrumb.Item className="">
						<Link className="nav-link p-0" to="/">Home</Link>
					</Breadcrumb.Item>
					<Breadcrumb.Item active href=""className="">404</Breadcrumb.Item>
				</Breadcrumb>
				<h2 className="heading-banner">404</h2>
			</div>
		</Container>
	</section>
	<section className="Blog-Section-2">
		<Container>
			<div className="Blog-Section-2-data">
				<Row>
					<Col xl={12} lg={12} md={12} className="lg-mb-2">
						<h1>404: Not Found</h1>
						<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
					</Col>
				</Row>
			</div>
		</Container>
	</section>
	
	<SEO title="404: Not found" />
   
  </Layout>
)

export default NotFoundPage
