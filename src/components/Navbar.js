import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Navbar extends Component{
	render(){
		return (
			<nav className="navbar bg-light">
				<Link to="/">React Shop</Link>
				<Link to={{ pathname:"/cart", state: { cartList: this.props.totalCart } }} className="btn btn-warning">
					<span><i className="fa fa-shopping-cart"></i></span> &nbsp;
					<span>View Cart</span> &nbsp;
					<span className="badge badge-pill badge-dark"> { this.props.totalCart.length } </span>
				</Link>
			</nav>
		);
	}
}


export default Navbar;