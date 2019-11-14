import React, { Component } from 'react'
import axios from 'axios'

class Signup extends Component {
	state = {
		productName: '', description: '', price: '', quantity: '', image: null, category: '', categories: [], productData: '', message: '', error: null
	};
	componentDidMount = async () => {
		try {
			const res = await axios.get("/admin/categories.php");
			this.setState({ categories: res.data });
		} catch(err) {
			console.log(err)
		}
	};
	handleChange = (e) => {
		this.setState({ [e.target.id]: e.target.value })
	};
	// handleImageChange = (e) => {
	// 	console.log(e.target.files[0])
	// 	this.setState({ image: e.target.files[0] });
	// 	console.log(this.state.image);
	// };
	handleSubmit = async (e) => {
		e.preventDefault();
		// const formData = new FormData();
		// formData.append('picture', this.state.picture, this.state.picture.name);
		// formData.append('productData', this.state.productData);

		this.setState({
			productData: {
				productName: this.state.productName,
				description: this.state.description,
				price: this.state.price,
				quantity: this.state.quantity,
				category: this.state.category
			}
		})
		try {
			const res = await axios.post("/admin/addProduct.php", this.state.productData);
			console.log(res)
			this.setState({ message: res.data });
		} catch(err) {
			console.log(err)
		}
	}

	render(){
		return (
			<div>
				<div className="container">
					<div className="row">
						<div className="col-sm-12 col-md-3 col-lg-4 col-xl-4"></div>
						<div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
							<h2 className="text-center">Add Product</h2>
							<form onSubmit={ this.handleSubmit }>
								<div className="form-group">
									<label>Product Name</label>
									<input type="text" className="form-control" id="productName" required onChange={ this.handleChange } />
								</div>
								<div className="form-group">
									<label>Description</label>
									<textarea type="text" className="form-control" id="description" required onChange={ this.handleChange }></textarea>
								</div>
								<div className="form-group">
									<label>Price</label>
									<input type="number" className="form-control" id="price" required onChange={ this.handleChange } />
								</div>
								<div className="form-group">
									<label>Quantity</label>
									<input type="number" className="form-control" id="quantity" required onChange={ this.handleChange } />
								</div>
								<div className="form-group">
								<label>Picture</label>
									<label className="form-control">Choose Product Image
										<input type="file" className="d-none" id="image" onChange={ this.handleImageChange } />
									</label>
								</div>
								<div className="form-group">
									<label>Category</label>
									<select id="category" className="form-control" required onChange={ this.handleChange }>
										{ this.state.categories.map((category, index) =>
											<option value={ category.id } key={ index }>{ category.category_name }</option>
										)}
									</select>
								</div>
								<div>{ this.state.message === 'SUCCESS' &&
										<div className="alert alert-success alert-dismissable fade show shadow text-center">
											<button type="button" className="close" data-dismiss="alert">&times;</button>
											Product Added Successfully!
										</div>}
								</div>
								<button type="submit" className="btn btn-block btn-primary">Submit</button>
							</form>
						</div>
						<div className="col-sm-12 col-md-3 col-lg-4 col-xl-4"></div>
					</div>
				</div>
			</div>
		)
	}
}

export default Signup