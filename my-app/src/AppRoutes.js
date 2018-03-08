import React, { Component } from 'react';
import App from './App';
import Address from './Address'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


class AppRoutes extends Component {



		render(){
			return(
					<Router>
					<Switch>
					<Route exact path='/' component={App} />
					<Route exact path='/pick_address' component={Address} />
					</Switch>
					</Router>
			)
		}


}
export default AppRoutes;