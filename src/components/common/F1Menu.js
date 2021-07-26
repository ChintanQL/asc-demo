import React, { Component  } from 'react';
import {  Image,ListGroup } from 'react-bootstrap'
import { Link,StaticQuery, graphql } from 'gatsby'
import icon1 from '../../images/icon1.png'

class F1Menu extends Component {
    
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
            
			<StaticQuery
					query={graphql`
						query MyQuery6 {
							wordpressMenusMenusItems(slug: {eq: "gatsby-footer-menu-1"}) {
								id
								items {
									title
									slug
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
									<ListGroup.Item as="li">
									<i className="fa fa-angle-right"></i>
									{(innerprop.slug == 'my-account') ? 
									(<Link to={"https://staging-ascstaging.kinsta.cloud/"+innerprop.slug} className="" dangerouslySetInnerHTML={{ __html: innerprop.title}} />) : 
									(<Link to={"/school-holiday-programs/"+innerprop.title.replace(/\s+/g, '-').toLowerCase()
									} className="" dangerouslySetInnerHTML={{ __html: innerprop.title}} />)}
										
										
										
                                    </ListGroup.Item>
									
								</>
								)}
							)	
								
				}
				</>
			)}
		  />
            </>
        );
    }
}

export default F1Menu;