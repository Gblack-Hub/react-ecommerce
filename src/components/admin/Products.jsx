import React, { Component } from 'react';
import axios from 'axios'

class Products extends Component {
	state = {
		productList: [], message: '', error: ''
	};
	componentDidMount = async () => {
   	try {
   		const res = await axios.get('/admin/products.php');
		   this.setState({ productList: res.data });
   	} catch(err) {
   		console.log(err)
		   // this.setState({ error: err });
   	}
   };
   handleUpdate = (id) => {
   	console.log("Updated ",id)
   };
   handleDelete = async (id) => {
   	try {
   		const res = await axios.post('/admin/deleteProduct.php', id);
		   if(res.data === 'SUCCESS'){
		   	try {
		   		const res = await axios.get('/admin/products.php');
		   		this.setState({ productList: res.data });
		   	} catch(err) {
		   		console.log(err);
		   	}
		   }
   	} catch(err) {
   		console.log(err)
		   // this.setState({ error: err });
   	}
   }
	render(){
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
						<table className="table table-striped table-bordered table-responsive">
							<thead>
								<tr>
									<th>S/N</th>
									<th>Product Name</th>
									<th>Description</th>
									<th>Price</th>
									<th>Qty Left</th>
									<th>Category</th>
									<th>Picture</th>
									<th>Date Created</th>
									<th>Last Updated</th>
									<th colSpan="2"><span><i className="fa fa-cog"></i></span></th>
								</tr>
							</thead>
							<tbody>
								{ this.state.productList.length === 0 && <tr><td colSpan="10" className="bg-secondary p-2 text-white text-center"><h5>Product list is empty</h5></td></tr>}
								{ this.state.productList.map((product, index) => (
									<tr key={ index }>
										<td>{ index+1 }</td>
										<td>{ product.product_name }</td>
										<td>{ product.description }</td>
										<td>{ product.price }</td>
										<td>{ product.quantity }</td>
										<td>{ product.category_name }</td>
										<td><img className="img-list rounded" src={ require("../assets/images/bag1.jpg")} alt="{product.picture}" /></td>
										<td>{ product.created }</td>
										<td>{ product.updated }</td>
										<td><span className="pointer" onClick={ () => this.handleUpdate(product.id) }><i className="fa fa-edit"></i></span></td>
										<td><span className="pointer" onClick={ () => this.handleDelete(product.id) }><i className="fa fa-trash"></i></span></td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		)
	}
}

export default Products