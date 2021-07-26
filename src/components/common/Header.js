import React, { Component  } from 'react';
import {  Image,ListGroup,Navbar,Container,Modal } from 'react-bootstrap'
import { Link,StaticQuery, graphql } from 'gatsby'
import logo from '../../images/logo.png'
import navimage from '../../images/nav-image.png'
import icon1 from '../../images/icon1.png'
import cart from '../../images/cart.png'
import CityMenu from './CityMenu'
import SocialMenu from './SocialMenu'
import Menubanner from './Menubanner'
import SportMenu from './SportMenu'
import PartnerMenu from './PartnerMenu'
import "../../components/style.css"
import axios from 'axios';
import Cookies from 'universal-cookie';
import queryString from 'query-string'


class Header extends Component {
    constructor(props) {
		super(props);
		
		this.state = {
			isTop: true,
			cart: '',
			show:false,
			query_code:"",
			code:"",
			shown: "d-none",
			isOpen:false
		};
		
		
		
		this.CheckModel = this.CheckModel.bind(this);
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
	
	CheckModel(){
		
		const cookies = new Cookies();
		if(cookies.get("Popup") == undefined){
			console.log("here");
			var expi = (new Date(Date.now()+ 86400*1000)).toUTCString();
			cookies.set('Popup', "1", { domain: '.australiansportscamps.com.au' , path: '/' , maxAge: 1000000});
			this.setState({
				isOpen:true,
			})
		}
		else{
			
		}
	}
	
	
      componentDidMount() {
        document.addEventListener('scroll', () => {
			const isTop = window.scrollY < 200;
			if (isTop !== this.state.isTop) {
				this.setState({ isTop })
			}
        });
		
		document.getElementById("navResources").addEventListener("click", function() {
			document.getElementById("dmenut").classList.toggle("active"); 
			document.getElementById("dmenut").classList.toggle("show"); 
			document.getElementById("dmenu").classList.toggle("show"); 
		}); 
			
		document.getElementById("navbarDropdown").addEventListener("click", function() {
			document.getElementById("d2menut").classList.toggle("active"); 
			document.getElementById("d2menut").classList.toggle("show"); 
			document.getElementById("d2menu").classList.toggle("show"); 
		}); 

		document.getElementById("navCont").addEventListener("click", function() {
			document.getElementById("d3menut").classList.toggle("active"); 
			document.getElementById("d3menut").classList.toggle("show"); 
			document.getElementById("d3menu").classList.toggle("show"); 
		}); 	
			
		
		if(window.location.href.indexOf("/camps/") > -1){
			var element = document.getElementById("navbarDropdown");
			element.classList.add("active");
        }
		if(window.location.href.indexOf("/city/") > -1){
            var element = document.getElementById("navbarDropdown");
			element.classList.add("active");
        }
		if(window.location.href.indexOf("/book-a-camp/") > -1){
            var element = document.getElementById("navbarDropdown");
			element.classList.add("active");
        }
		if(window.location.href.indexOf("/school-holiday-programs/") > -1){
            var element = document.getElementById("navbarDropdown");
			element.classList.add("active");
        }
		if(window.location.href.indexOf("/partner-program/") > -1){
            var element = document.getElementById("navbarDropdown");
			element.classList.add("active");
        }
		
		if(window.location.href.indexOf("/blog") > -1){
            var element = document.getElementById("navResources");
			element.classList.add("active");
        }
		if(window.location.href.indexOf("/videos") > -1){
            var element = document.getElementById("navResources");
			element.classList.add("active");
        }
		if(window.location.href.indexOf("/guide") > -1){
            var element = document.getElementById("navResources");
			element.classList.add("active");
        }
		if(window.location.href.indexOf("/flyer") > -1){
            var element = document.getElementById("navResources");
			element.classList.add("active");
        }
		if(window.location.href.indexOf("/category/") > -1){
            var element = document.getElementById("navResources");
			element.classList.add("active");
        }
		if(window.location.href.indexOf("/tags") > -1){
            var element = document.getElementById("navResources");
			element.classList.add("active");
        }
		
		if(window.location.href.indexOf("/about-us") > -1){
            var element = document.getElementById("navCont");
			element.classList.add("active");
        }
		if(window.location.href.indexOf("/faq") > -1){
            var element = document.getElementById("navCont");
			element.classList.add("active");
        }
		if(window.location.href.indexOf("/how-to-book") > -1){
            var element = document.getElementById("navCont");
			element.classList.add("active");
        }
		if(window.location.href.indexOf("/contact-us") > -1){
            var element = document.getElementById("navCont");
			element.classList.add("active");
        }
		
		
		
		
		this.CheckModel()
		
      } 
	
	
	  
    render() {
		const cookies = new Cookies();
        return (
            <>
            <Modal show={this.state.isOpen} onHide={this.modalClose} size="lg" className="video-modal"
            aria-labelledby="contained-modal-title-vcenter"
            centered >
                <Modal.Body className="p-0">
                    <button type="button" onClick={this.modalClose} class="close">
                        <span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
                    </button>
					<p className="sub_img" ><img  title="Australian Sports Camps" src="https://staging-ascstaging.kinsta.cloud/wp-content/uploads/2016/05/australian-sports-camps-600x275.png" alt="Australian Sports Camps" /></p>
					<p className="sub_title" >Subscribe to Updates</p>
					<p className="sub_sub_title" >Sign up for free to be the first to hear about upcoming camps, special offers and discounts.</p>
					<iframe height="420" width="100%" frameBorder="0" src="https://staging-ascstaging.kinsta.cloud/gravity-subscribe/" title="description" />
					
                </Modal.Body>
            </Modal>
    <header>
        <div className="social-header">
            <div className="container d-flex d-small-block justify-content-between">
                <div className="first-li align-items-center d-flex">
                    <ListGroup horizontal as="ul">
                        <SocialMenu />
                        <ListGroup.Item as="li" className="d-md-none d-none d-flex">
                            <a href="tel:1300914368" className="nav-link p-0" to="/">
                                <i className="fa fa-phone"></i>
                            </a>
                        </ListGroup.Item>
						<span className="httxt text-white text-uppercase">Australian sports camps ™</span>
                    </ListGroup>
                </div>
                <div className="second-li align-items-center d-sm-flex">
                    <ul className="d-md-flex d-none list-group list-group-horizontal">
                        <li className="list-group-item" >
                        <a className="nav-link p-0" href="tel:1300914368"><i className="fa fa-phone"/></a><a className="nav-link p-0" href="tel:1300914368"> CALL US: 1300 914 368</a>
                        </li>
                        <li>
                            |
                        </li>
						
						<>{(cookies.get('LOGIN') == 1) ? (
							
							<li className="userdropdownbox list-group-item" onClick={()=>{this.setState({show:!this.state.show})}} >
                            <i className="fa fa-user-circle"></i>{cookies.get('USER')} <span className="userdropdownbox"></span>
                            <ul className="htdropdown" style={{ display: this.state.show ? "block" : "none" }}  >
                                <li><a href="https://staging-ascstaging.kinsta.cloud/my-account/">Profile</a></li>
                                <li><a href={atob(cookies.get('L_URL'))}>logout</a></li>
                            </ul>
                       
                        </li>
							
							
						) : ( 
							<li className="list-group-item">
								<Link to="https://staging-ascstaging.kinsta.cloud/my-account/">LOGIN</Link>
									<div className="menulogregi" >OR</div>
								<Link to="https://staging-ascstaging.kinsta.cloud/register/">REGISTER</Link>
							</li>
						
						) }</>
						
						
						
                        
                    </ul>

                    <ul className="d-md-none d-flex htmob-displaybx list-group list-group-horizontal">
                        
						{(cookies.get('LOGIN') == 1) ? (
						<li className=" list-group-item" onClick={()=>{this.setState({show:!this.state.show})}} >
                            <i className="fa fa-user-circle"></i>{cookies.get('USER')} <span className="userdropdownbox"></span>
                            <ul className="htdropdown" style={{ display: this.state.show ? "block" : "none" }}  >
                                <li><a href="https://staging-ascstaging.kinsta.cloud/my-account/">Profile</a></li>
                                <li><a href={atob(cookies.get('L_URL'))}>logout</a></li>
                            </ul>
                       
                        </li>
						
						
						) : (
						<li className="list-group-item">
                        <Link to="https://staging-ascstaging.kinsta.cloud/my-account/">LOGIN</Link>
                        <div className="menulogregi" >OR</div>
                        <Link to="https://staging-ascstaging.kinsta.cloud/register/">REGISTER</Link>
                        </li>
						
						)}
						
						
						
						
                    </ul>
                </div>
            </div>
        </div>
        <div className={this.state.isTop ? 'main-header' : 'main-header sticky'}>
            <Container>
            <Navbar expand="xl" className="bg-none">
                <Navbar.Brand>
                    <Link aria-current="page" className="navbar-brand" to="/">
                        <Image src={logo} className="img-fluid" alt="" width="120px"/>
                    </Link>
                </Navbar.Brand>
				<div clas="htright">
					<div className="mobcartbx">
						<a href="https://staging-ascstaging.kinsta.cloud/cart/" className="nav-link uppercase "><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAqtJREFUSEu9l8F12kAQhmelE/hgXIFJBcY3sTrEqSCkA6eCQAdyBcYV2KkgdBDnsItuERWEDswFoYs0eb+8+54iJISI5X2PxwOk+bT/zvwzCN/3IyK6ote1YeZFHMezKIo25rtO3oTneTeO49yY6AMiuhVCLJRSt50QTVBRDi6lBPgxTdMPYRiuu4LvgUej0eDs7OyFiGZKqfm7gQGSUi6EEJ+LUGZeCyH+WwFmRh497+3YgHO5ieg7gEfuekREyJGmNcQFleAu5ZZSPqN6KsFWbiK61FpfN22hze++7zPy5xD4zbMbpeu67k9mvq4FdyG3lDIgoqnWelAL7kJue75a60kT+E3lllLChuda6+Ag2MrNzF+11k9tkqh87Xg8njiO8wPnq7WODoILchPkaQvGg/d6vSvHcVC7c2b+ZeMcA87l3m63F8WOJaUcMfM5gjLzqykIkTcbfBZC5N/ZxcwPcRwHNkYjuCA32ieCw6Gq1gp2CHMgovzaLMtgFpQkSVRus41gz/OGruv+ISIEXhjiOsuyteM4G5xX2yOotcxiIN/3p0R0X5b6FFjxnsYd2/787mCccb/fR4eC1Z3Un3e73ar1GUMeMx6hR5+fKPFKKfVPUjZKXQThAU4Er8tjVCvwidDK2w6CjcSPMANMIsw8Wy6XtqQqA5ryw/QCdTDmwJvvyhfXgk2A38y8IiL49ARzWJqmn8IwzI2hapk5He6FRBwJIb5VDY61YNQvMwdxHA9tRiIoBjWtNWp7bxUbvTUWKSUe4GN5kjk0gQR4WqXUhSWY3UR1w74FF2dygOHhR2e1tUpmfsILNwshgizLvtSds6l5WOgLM08LXekBPfho54JroZ3Z+mXmu3KAst7oWkSEmr/Eb+hKVUdzVDkhWNtmAMWSJNnU/fn7C5TsizPzBN7/AAAAAElFTkSuQmCC" alt="" width="" className="img-fluid"/><span className="badge blue_color">{cookies.get('CART')}</span></a>
						
					</div>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
				</div>
				
				
               
                <Navbar.Collapse id="navbarSupportedContent" className="justify-content-end">
                <div className="justify-content-end" id="">
                        <ul className="navbar-nav ">
                            
							<StaticQuery
					query={graphql`
						query MyQuery {
							wordpressMenusMenusItems(slug: {eq: "gatsby-header-menu"}) {
								id
								items {
									title
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
						(prop,i) => {	
							return (
								<>
								{(prop.child_items ? (
									<>
									{(prop.title == 'Resources') ? (<div>
										<li className="nav-item dropdown uppercase" id="dmenut" ><Link activeClassName="active" id="navResources" className="nav-link dropdown-toggle" data-toggle="dropdown"
												href="javascript:;" aria-expanded="false">{prop.title}</Link>
											<ul className="dropdown-menu common-menu" id="dmenu" >
												<li  key={i} ><Link className="dropdown-item"   to={"/resources"}>All</Link></li>
												<>
												{prop && prop.child_items && prop.child_items.map((child, i) => {
													return (
														<>
														{(child.title == 'Home' ? (<li  key={i} ><Link className="dropdown-item"   to={"/"}>{child.title}</Link></li>) : (<li  key={i} ><Link className="dropdown-item"   to={"/"+child.url.toLowerCase().replace("http://", '')}>{child.title}</Link></li>) )}
														</>
													)
												})}
												</>
											</ul>
										</li>
									</div>) : (<div>
										<li className="nav-item dropdown uppercase" id="d3menut" ><Link activeClassName="active" id="navCont" className="nav-link dropdown-toggle" data-toggle="dropdown"
												href="javascript:;" aria-expanded="false">{prop.title}</Link>
											<ul className="dropdown-menu common-menu" id="d3menu">
												{prop && prop.child_items && prop.child_items.map((child, i) => {
													return (
														<>
														{(child.title == 'Home' ? (<li  key={i} ><Link className="dropdown-item"   to={"/"}>{child.title}</Link></li>) : (<li  key={i} ><Link className="dropdown-item"   to={"/"+child.url.toLowerCase().replace("http://", '')}>{child.title}</Link></li>) )}
														</>
													)
												})}
											</ul>
										</li>
									</div>) }
									</>
									
								
									
								
								) : 
								(
									<>
										{(prop.title == 'Camps' ? (
											<div>
												<li className="nav-item dropdown position-static" id="d2menut" ><Link activeClassName="active" className="nav-link dropdown-toggle main-menu-toggle"
														href="javascript:;" onClick={e => e.preventDefault()} id="navbarDropdown" role="button"
														data-toggle="dropdown">Camps</Link>
													<ul className="dropdown-menu main-menu" id="d2menu">
														<div className="w-100 d-flex main-box d-xl-block">
															<div className="first-box">
																
																	
																	
																		<SportMenu />
																	
																
																
																<div className="inner-menu">
																	<div className="mb-3 menu-heading">
																		<a className="" href="/school-holiday-programs">Cities</a>
																	</div>
																	<ListGroup as="ul">
																		<CityMenu />
																		
																	</ListGroup>
																</div>
																
																	<PartnerMenu />
																
															
															</div>
															<Menubanner />
															
															
														</div>
													</ul>
												</li>
											</div>
										) : 
										(
											<>{(prop.title == 'Shop' ? (
												<div>
													<li className="nav-item">
														<Link className="nav-link" activeClassName="active" to={"/product-shop"}>{prop.title}</Link>
													</li>
												</div>
											
											) : (
												<>
													{(prop.title == 'Home' ? 
													(
														<div>
															<li className="nav-item">
															<Link className="nav-link" activeClassName="active" to={"/"}>{prop.title}</Link>
															</li>
														</div>
													) : (
													<>
													{(prop.title == 'Membership') ? (<div>
													<li className="nav-item">
														<Link className="nav-link" activeClassName="active" to={"/memberships"}>Membership</Link>
														</li>
													</div>) : (
													<div>
															<li className="nav-item">
																<Link className="nav-link" activeClassName="active" to={"/"+prop.title.toLowerCase().replace(/\s+/g, '-')}>{prop.title}</Link>
															</li>
														</div>
													
													)}
													
													</>
													
													
													
														
													))}
												</>
											
												
											
											))}
											</>
											
											
											
										))}
									
									</>
									
								))}
								</>
							)
						})
				}
				</>
			)}
		  />
                            
							
							
                            
                            <div>
                                <li className="nav-item">
                                    <Link activeClassName="active" className="nav-link uppercase btn-sm btn-orange" to="/book-a-camp">book a camp</Link>
                                </li>
                            </div>

                            <div>
                                <li className="nav-item pr-0 mob-toggle-cart">
                                    <Link className="nav-link uppercase " to="https://staging-ascstaging.kinsta.cloud/cart/"><Image src={cart} className="img-fluid" alt="" width=""/>
									<span className="badge badge-blue">{cookies.get('CART')}</span>
									</Link>
                                </li>
                            </div>
                        </ul>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </Container>
        </div>
        </header>
            </>
        );
    }
}

export default Header;