import React, { Component  } from 'react';
import { Link } from 'gatsby'
import axios from 'axios';
import {Image,ListGroup,Form,InputGroup,FormControl,Button,Tab,Nav} from 'react-bootstrap'

class LatestPost extends Component {
    
	constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
   
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
			url: 'https://staging-ascstaging.kinsta.cloud/wp-json/newasc/v1/top_latest_post',
			method: 'get'
		}).then(res => {
			this.setState({PageData: res.data.ResponseData})
			
			this.setState({showInfo: 1})
		})
	}
	
	
	render() {      
        return (
            <>
           <div className="" style={{ display: this.state.showInfo == 0 ? "none" : "inline-block" }} >
			<ListGroup as="ul">
			
			{(this.state.showInfo == 1) ? (
				<>
					{this.state.PageData.map( (propd,i) => {
															return (
						<ListGroup.Item as="li" className="d-flex">
							<Link to={"/blog/"+propd.slug+"/"} >
							<div className="img-box-sidebar">
							<Image src={propd.image} className="img-fluid border-0"/>
							</div>
							<div className="content-box-sidebar ">
								<span className="font-14 font-medium uppercase">{propd.Date}</span>
								<h2 className="font-14 font-bold title-color mb-1 line-break-2"  dangerouslySetInnerHTML={{ __html: propd.title }} />
							</div>
							</Link>
						</ListGroup.Item>									
						)									
					})}										
				</>
			
			) : ("")}
			
			 
			</ListGroup>
		   </div>
            </>
        );
    }
}

export default LatestPost;