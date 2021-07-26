import React, {Component} from 'react';
import Layout from "../components/layout"
import ContactusSection1 from "../components/ContactUs/ContactusSection1"
import ContactusSection2 from "../components/ContactUs/ContactusSection2"
import ContactusSection3 from "../components/ContactUs/ContactusSection3"
import Footer from "../components/common/Footer"
import BottomForm from "../components/common/BottomForm"
import { Helmet } from "react-helmet"
class ConatctUs extends Component {
  


  
  render() {
	


      return (
          <Layout>
            <>
			<Helmet>
				<title>Contact Us - Australian Sports Camps</title>
				<meta name="description" content="ASC have provided kids sports camps in Australia for over 33 years. We look forward to speaking with you and assisting you in any way possible!" />
				<meta property="og:locale" content="en_US" />
				<meta property="og:type" content="article" />
				<meta property="og:title" content="Contact Us - Australian Sports Camps" />
				<meta property="og:description" content="ASC have provided kids sports camps in Australia for over 33 years. We look forward to speaking with you and assisting you in any way possible!" />
				<meta property="og:url" content="https://staging-ascstaging.kinsta.cloud/contact/" /><meta property="og:site_name" content="Australian Sports Camps" />
				<meta property="article:publisher" content="https://facebook.com/AustralianSportsCamps" /><meta property="article:modified_time" content="2016-10-12T05:45:48+00:00" />
				<meta property="og:image" content="https://staging-ascstaging.kinsta.cloud/wp-content/uploads/2016/05/australian-sports-camps-og.png" />t<meta property="og:image:width" content="1200" />t
				<meta property="og:image:height" content="1200" />
				<meta name="twitter:card" content="summary" /><meta name="twitter:creator" content="@austsportscamps" />
				<meta name="twitter:site" content="@austsportscamps" />
			</Helmet>
			
			
              <ContactusSection1/>
              <ContactusSection2/>
              <ContactusSection3/>
              <BottomForm/>
              <Footer/>
            </>
          </Layout>
      )
  }
}
export default ConatctUs
