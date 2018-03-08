import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './nav';
 import $ from 'jquery';
 import { Card, CardText, CardBody, CardLink,
	CardTitle, CardSubtitle } from 'reactstrap';
	import './addressStyle.css';

class Address extends Component{

	constructor(props){
		super(props);
		this.state = {value:'',addresses:[],isLoaded:false,list:''};
		this.changeHandler1 = this.changeHandler1.bind(this);
		this.submitHandler1 = this.submitHandler1.bind(this);
		this.cardClick = this.cardClick.bind(this);
	}

	cardClick(event){
		// console.log(event.target.value);
		this.setState({list:'',addresses:[],isLoaded:false,value:event.target.value});
		event.preventDefault();
	}

	changeHandler1(event){
		this.setState({list:'',addresses:[]});
		this.setState({value:event.target.value});

		if(event.target.value === ''){
			this.setState({list:'',addresses:[],isLoaded:false});
		this.setState({value:event.target.value});
		}
		else{
				
				fetch("http://maps.googleapis.com/maps/api/geocode/json?address="+event.target.value+"&sensor=true%27")
				.then(res => res.json())
				.then(
					(result) => {
						this.setState({
							isLoaded: true,
							
						});
						for(let i = 0; i < result.results.length; i++){
							//console.log(JSON.stringify(result.results[i].formatted_address));
							this.state.addresses.push(JSON.stringify(result.results[i].formatted_address));
							// this.state.cardValue.push(JSON.stringify(result.results[i].formatted_address));

						}
						let listItems = this.state.addresses.map((answer) =>
						<button className = "card_background btn form-control" onClick = {this.cardClick} value = {answer}> 
							{answer}
						</button>

					);
					this.setState({list: listItems});
					},
					// Note: it's important to handle errors here
					// instead of a catch() block so that we don't swallow
					// exceptions from actual bugs in components.
					(error) => {
						this.setState({
							isLoaded: false,
							
						});
					}
				)
			}
	}
	submitHandler1(event){
	
	}
	render(){
		return(
			<div>
				<div><Navbar/></div>
	 			<div className="jumbotron jumbotron-fluid">
				  <div className="container">
				    <h2>Pick Your Address</h2>
				    <br/>
				    <form onSubmit={this.submitHandler1}>
					  <div className="form-group">
					    <input type="text" value={this.state.value} onChange={this.changeHandler1} className="form-control"/>
					  </div>
						<div>
								{
										this.state.isLoaded &&
										<Card className = "card_align">
											<CardBody className = "card_body">
											
											{this.state.list}
											</CardBody>
										</Card>
								}
						</div>
					<button type="submit" className="btn btn-primary">Select</button>
					</form>
				  </div>
				</div>
	 		</div>

		)
	}
}

export default Address;