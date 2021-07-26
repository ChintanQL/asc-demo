import React, { Component  } from 'react';
import {  Container,Col,Form,Row,Button,Modal } from 'react-bootstrap'
import { Link } from 'gatsby'
import Select from 'react-select'
import Cookies from 'universal-cookie';
import axios from 'axios';
import SearchLocationInput from '../Home/SearchLocationInput'
import $ from "jquery";
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';

class BottomForm extends Component {
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
	
	
	Campred(){
		const cookies = new Cookies();
		var lat =  cookies.get('lat');
		var lng =  cookies.get('lng');
		var loc =  cookies.get('loc');
		var locationName =  cookies.get('locationName');
		//var multu =  this.state.multiValue;
		var str = this.state.selectedOption;
		//$.each(multu, function (i,val) {
			//str +=val.value+",";
		//});
		var flg = 0;
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
		window.open(URL, "_blank");
		
	}
	
	

	handleChange = selectedOption => {
    this.setState({ selectedOption : selectedOption.value });
	 this.setState({ selectedOption2 : selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

	componentDidMount(){
		//this.getOptions()
		
	}
	
	
	
	
	handleMultiChange(option) {
		this.setState(state => {
		  return {
			multiValue: option
		  };
		});
	}
	
    render() { 
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
			 
            <section className="BottomForm">
                <Container>
                <Form>
                    <Row className="align-items-center justify-content-center">
                        <Col xs="12" xl={2} lg={3} md={12} className="lg-mb-2">
                            <Form.Label className="font-20 font-bold color-3b mb-0"> 
                                FIND A CAMP
                            </Form.Label>
                        </Col>
                        <Col xs="12" xl={3} lg={3} md={4} sm="4" className="sm-mb-2">
                           <SearchLocationInput/>
                        </Col>
                        <Col xs="12" xl={3} lg={3} md={4} sm="4" className="sm-mb-2 seccont">
                           
							<Select placeholder="Select Sports" placeholderButtonLabel="Select Sports"
        value={this.state.selectedOption2}
        onChange={this.handleChange}
        options={this.state.selectOptions}
		styles={customStyles}
      />
                        </Col>
                        <Col  xs="12" xl={2} lg={2} md={4} sm="4">
                            <Button type="button" onClick={this.Campred} className="uppercase btn-sm btn-orange mb-0">
                                Find Camps
                            </Button>
                           
                        </Col>
                    </Row>
					<p  className={"text-danger er-msg "+this.state.shown} >Please select a Location or Sport.</p>
                    </Form>
                </Container>
            </section>
            </>
        );
    }
}

export default BottomForm;