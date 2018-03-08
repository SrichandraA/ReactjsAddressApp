import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

class Test extends Component{
    constructor(props){
        super(props);
        this.onDellEvent = this.onDellEvent.bind(this);
    }
    onDellEvent(event){
        this.props.onDell(event);
    }
    render(){
        return(
            <div>{this.props.value}
            
            <button onClick={this.onDellEvent}>btn</button>

            </div>

        )
    }
} 
export default Test;