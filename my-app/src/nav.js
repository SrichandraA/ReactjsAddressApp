import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import  { Redirect } from 'react-router-dom';
 import './navStyle.css';
 import $ from 'jquery';
  import RouteNavItem from './RouteNavItem';


class Topbar extends Component {

componentDidMount(){
	$(".nav_titles").click(function(){
		$(this).css('color','black');
});

}

render(){
	return(
	
		<Nav>
          <NavItem>
            <NavLink className="nav_titles" href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav_titles" href="/">Articles</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav_titles" href="/pick_address">Addresses</NavLink>
          </NavItem>
        
        </Nav>
     

	);
}


}
export default Topbar;