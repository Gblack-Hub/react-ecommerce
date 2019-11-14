import React, { Component } from 'react';

class Cart extends Component {
	state = {
		cartList: this.props.location.state.cartList
	};
	handleDelete = (item) => {
		console.log(item)
	}
	render() {
	console.log(this.props)
		return (
			<div>
				<div className="container py-4">
				  	<h1 className="display-5 text-center">Your Cart</h1>
				  	<div>
				  		{	this.state.cartList.length === 0 && <h2 className="text-center text-white bg-danger p-3">Cart is Empty</h2>	}
				  	 	{	this.state.cartList.map((cartItem, index) =>
				  	 			{ return (
				  	 				<div key={index}>
					  	 				<div className="d-flex justify-content-between p-2 mb-2 rounded shadow" key={ index }>
					  	 					<div>
					  	 						<img className="img img-fluid rounded w-50 mr-3" src={ require('./assets/images/bag1.jpg') } alt="{ cartItem.itemName }" />
					  	 						<span className="text-capitalize"><strong>{ cartItem.itemName }</strong></span>
					  	 					</div>
					  	 					<div>
						  	 					<button className="btn btn-danger rounded-circle" onClick={ () => this.handleDelete(index) }>
						  	 						<span><i className="fa fa-trash"></i></span>
						  	 					</button>
						  	 					<div><strong>${ cartItem.price }</strong></div>
						  	 				</div>
					  	 				</div>
					  	 				<div>{this.state.cartList.reduce((cartTotal, item) => {return parseInt(item.price) + cartTotal}, 0)}</div>
									</div>
				  	 			)}
				  	 		)
				  	 	}
					</div>
			  	</div>
			</div>
		);
	}
}

export default Cart;