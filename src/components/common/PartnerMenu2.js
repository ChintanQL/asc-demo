import React, { Component  } from 'react';
import {  Image,ListGroup } from 'react-bootstrap'
import { Link,StaticQuery, graphql } from 'gatsby'
import icon1 from '../../images/icon1.png'
class PartnerMenu2 extends Component {
    
    state = {
        isTop: true,
      };
    
      componentDidMount() {
        document.addEventListener('scroll', () => {
          const isTop = window.scrollY < 200;
          if (isTop !== this.state.isTop) {
              this.setState({ isTop })
          }
        });
      } 
    render() {

        return (
            <>
            <div className="inner-menu">
																<div className="mb-3 menu-heading">
				<h3 className="font-16 font-semibold color-333 uppercase mb-3 menublank_none">&nbsp;</h3>
			</div>
																<ListGroup as="ul" className="no-br">
			<StaticQuery
					query={graphql`
						query MyQuery45 {
							wordpressMenusMenusItems(slug: {eq: "gatsby-menu-partner"}) {
								id
								items {
									title
									slug
									attr_title
									child_items {
										title
										url
									}
									url
								}
							}
						}
					`}
			render={data => (
				<>
				{
					data &&
					data.wordpressMenusMenusItems &&
					data.wordpressMenusMenusItems.items &&
					data.wordpressMenusMenusItems.items.map(
						(innerprop,i) => {	
							return (
								<>
								{((data.wordpressMenusMenusItems.items.length/2) > i ) ? (<ListGroup.Item as="li">
										<Image src={innerprop.attr_title} fluid className="icon" /><Link to={"/camps/"+innerprop.slug} className="" dangerouslySetInnerHTML={{ __html: innerprop.title}} className="" />
									</ListGroup.Item>) : ("")} 
										
								</>
								)}
							)	
								
				}
				</>
			)}
		  />
		  </ListGroup>
		  </div>
            </>
        );
    }
}

export default PartnerMenu2;