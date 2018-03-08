import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './nav';
// import Test from './Test';

class App extends Component {
  
  constructor(props){
  	super(props);
	this.state = {value:'',word:[],list:''};
	this.submitHandler = this.submitHandler.bind(this);
	this.changeHandler = this.changeHandler.bind(this);
	// this.TestMethod = this.TestMethod.bind(this);
  }

	changeHandler(event){
		this.setState({value: event.target.value});
	}
	submitHandler(event){

		this.state.word.push(this.state.value);
		let listItems = this.state.word.map((answer) =>
			<li key={answer.toString()}>
				{answer}
			</li>
		);
		this.setState({list: listItems});
		event.preventDefault();
		this.setState({value: ''});
	}
	// TestMethod(event){
	// 	alert("fdf");
	// }
	 render(){
	 	return(
	 		<div>
				<div><Navbar/></div>
	 			<div className="jumbotron jumbotron-fluid">
				  <div className="container">
				    <h2>Articles</h2>
				    <br/>
				    <form onSubmit={this.submitHandler}>
					  <div className="form-group">
					    <label>Enter Article</label>
					    <input type="text" id = "text_field" value={this.state.value} onChange={this.changeHandler} className="form-control"/>
					  </div>
					<button type="submit" className="btn btn-primary">Submit</button>
					</form>
					<br/>
					{/* <Test 
						value = {"Dsc"}
						onDell= {this.TestMethod}
					/> */}
					<h4>List</h4>
					<br />
					<ul>	{this.state.list} </ul>
				  </div>
				</div>
	 		</div>
	 	);
	}
}

export default App;