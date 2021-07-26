import React, { Component,useState } from 'react';
import { Container,Image,Row,Col,Button,Form } from 'react-bootstrap';
import Slider from "react-slick";
import Cookies from 'universal-cookie';
import Select from 'react-select'
import SearchLocationInput from './SearchLocationInput'
import axios from 'axios';
import $ from "jquery";
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';



function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
      </div>
  );
}




function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick} >
    </div>
  );
}







class HomeSection1 extends Component {
	constructor(props){
		super(props)
		this.state = {
			multiValue: [],
			selectOptions : [
 { value: 'basketball', label: 'Basketball' },
{ value: 'football', label: 'AFL / AFLW Football' },
{ value: 'netball', label: 'Netball' },
{ value: 'cricket', label: 'Cricket' },
{ value: 'soccer', label: 'Soccer' },
{ value: 'hockey', label: 'Hockey' },
{ value: 'tennis', label: 'Tennis' },
{ value: 'rugby-league', label: 'Rugby League' },
{ value: 'rugby-union', label: 'Rugby Union' },
{ value: 'golf', label: 'Golf' },
{ value: 'rock-climbing-indoor-surfing', label: 'Rock Climbing' },
{ value: 'sailing', label: 'Sailing' },
{ value: 'table-tennis', label: 'Table Tennis' },
{ value: 'baseball', label: 'Baseball' },
{ value: 'ice-skating', label: 'Ice Staking' },
{ value: 'futsal', label: 'Futsal' },
{ value: 'horse-riding', label: 'Horse Riding' },
{ value: 'rowing', label: 'Rowing' },
{ value: 'multi-sport', label: 'Multi-Sport' },
{ value: 'esports', label: 'E-Sports' },
{ value: 'rock-climbing-indoor-surfing', label: 'Indoor Surfing' },
{ value: 'gymnastics', label: 'Gymnastics' },
{ value: 'speed-agility', label: 'Speed & Agility' },
{ value: 'softball', label: 'Softball' },
],
			id: "",
			name: '',
			shown: 'd-none',
			selectedOption: "",
			selectedOption2: "",
		}
		this.handleMultiChange = this.handleMultiChange.bind(this);
		this.Campred = this.Campred.bind(this);	
		 
	}
	
	async getOptions(){
    const res = await axios.get('https://staging-ascstaging.kinsta.cloud/wp-json/newasc/v1/all-cat')
    const data = res.data.ResponseData
	
    const options = data.map(d => ({
      "value" : d.id,
      "label" : d.value

    }))

   

  }

	handleChange = selectedOption => {
    this.setState({ selectedOption : selectedOption.value });
    this.setState({ selectedOption2 : selectedOption });
    console.log(`Option selected:`, selectedOption);
    console.log(`Option selected:`, selectedOption.value);
  };
  
	Campred(){
		this.setState({shown: "d-none"});
		const cookies = new Cookies();
		var lat =  cookies.get('lat');
		var lng =  cookies.get('lng');
		var loc =  cookies.get('loc');
		var locationName =  cookies.get('locationName');
		//var multu =  this.state.multiValue;
		var str = this.state.selectedOption;
		//console.log(this.state.multiValue);
		//$.each(multu, function (i,val) {
			//str +=val.value+",";
		//});
		var flg = 0;
		console.log("L"+loc);
		console.log("S"+str);
		if(loc == undefined){
			console.log("if");
			if(str == ''){
				flg = 1;
				console.log("if if");
			}
			else{
				flg = 0;
				console.log("if else");
			}	
		}
		else{
			console.log("else");
			if(loc == '' && str == ''){
					flg = 1;
					console.log("else if");
			}
			else{
				console.log("else else");
			}
		}	
			console.log(flg);
		if(flg == 1){
			this.setState({shown: "d-block"});
			setTimeout(
				function() {
					this.setState({shown: "d-none"});
				}
			.bind(this),
				2000
			);
			return false;
		}
		
		var URL = "https://staging-ascstaging.kinsta.cloud/location/?q="+str+"&l="+loc+"&f="+locationName+"&lat="+lat+"&lng="+lng;
		//window.location.href = URL;
		window.open(URL, "_blank");
		
		
		//window.location.replace(URL);
		
	}

  componentDidMount(){
		//this.getOptions()
		const cookies = new Cookies();	
		cookies.set('lat', "", { path: '/' });
		cookies.set('lng', "", { path: '/' });
		cookies.set('loc', "", { path: '/' });
		cookies.set('locationName', "", { path: '/' });
		cookies.set('code', "", { path: '/' });
  }
	
	handleMultiChange(option) {
    this.setState(state => {
      return {
        multiValue: option
      };
    });
  }
	
    render() {
		console.log(this.props.data);
        const settings1 = {
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 7000,
            speed: 1500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
			responsive: [
             {
               breakpoint: 800,
               settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
               }
             },
             {
               breakpoint: 600,
               settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
               }
             },
             {
               breakpoint: 480,
               settings: {
                 slidesToShow: 1,
                 slidesToScroll: 0,
				 autoplay: false,
				focusOnSelect: false,
				accessibility: false,
				draggable: false,
				swipe: false,
				swipeToSlide: false,
				touchMove: false,
				  
               }
             },{
               breakpoint: 320,
               settings: {
                 slidesToShow: 1,
                 slidesToScroll: 0,
				 autoplay: false,
				 focusOnSelect: false,
				accessibility: false,
				draggable: false,
				swipe: false,
				swipeToSlide: false,
				touchMove: false,
				  
               }
             }
           ]
          };
		  
		const customStyles = {
		  option: (provided, state) => ({
			...provided,
			paddingTop: 0,
			paddingBottom: 0,
			marginTop: 0,
			marginBottom: 0,
		  })
		};
		  
        return (
            <>
            
            <section className="Home-section-1 main-padding-header Home_section_new">
                <Slider {...settings1}>
                    {this.props.data.map((str) => 
						<div className="slider-data">
							<Image src={str.sliderImage.sourceUrl} className="img-fluid d-lg-inline d-none" />
							<div className="slider-inner-data">
							<Container>
								<Row className="">
									<Col xl={7} lg={7} md={12} sm={12}>
										<h3 className="font-bold text-white">{str.title}</h3>
										<div className="text-left" dangerouslySetInnerHTML={{ __html: str.content}} />
											
										
									</Col>
								</Row>
							</Container>
						</div>
                    </div>
					)}
                    
                    
                
                    
                </Slider>
				
				
				<div className="bg-ef">
                  <Container>
                    <div className="pos-absolute-form">
                        <Form className="align-items-center justify-content-center">
                             
							  <div className="home-form">
                                <div className="first-control">
                                  <SearchLocationInput/>
                                </div>
                                <div className="second-control">
									<Select placeholder="Select Sports" placeholderButtonLabel="Select Sports"
        value={this.state.selectedOption2}
        onChange={this.handleChange}
        options={this.state.selectOptions}
		styles={customStyles}
      />
								  
								  
                                </div>
								
                                <div className="third-control">
                                  <Button type="button" onClick={this.Campred} className="uppercase btn-sm btn-orange mb-0">
                                      Find Camps
                                  </Button>
                                </div>
                              </div>
							  <p  className={"text-danger er-msg "+this.state.shown} >Please select a Location or Sport.</p>
                        </Form>
                    </div>
                  </Container>
                </div>
				
            </section>
            </>
        );
    }
}

export default HomeSection1;
