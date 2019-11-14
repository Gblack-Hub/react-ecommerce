import React, { Component } from 'react';

class ProductInfo extends Component{
	state = {

	};
	componentDidMount = () => {
		console.log(this.props.match.params)
	}
	render(){
		return (
			<div>
				<div className="navbar bg-light">
					<h2>Product Information</h2>
					<div></div>
				</div>
			</div>
		);
	}
}

export default ProductInfo;