import React, { Component } from 'react'
import axios from 'axios'

class AddCategory extends Component {
	state = {
		categoryName: '', existingCategories: [], message: '', error: null
	};
	componentDidMount = async () => {
		try {
			const res = await axios.get("/admin/categories.php");
			this.setState({ existingCategories: res.data });
		} catch(err) {
			console.log(err)
		}
	};
	handleChange = (e) => {
		this.setState({ [e.target.id]: e.target.value })
	};
	handleSubmit = async (e) => {
		e.preventDefault();
		this.setState({
			categoryData: {
				categoryName: this.state.categoryName,
			}
		})
		try {
			const res = await axios.post("/admin/addCategory.php", this.state.categoryData);
			this.setState({ message: res.data });
			if(res.data === 'SUCCESS'){
				try {
					const res = await axios.get("/admin/categories.php");
					this.setState({ existingCategories: res.data });
				} catch(err) {
					console.log(err)
				}
			}
		} catch(err) {
			console.log(err)
		}
	}

	render(){
		return (
			<div>
				<div className="container py-4">
					<div className="row">
						<div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
							<div className="card">
								<div className="card-header bg-primary">
									<h4 className="text-center text-white text-center">Add Category</h4>
								</div>
								<div className="card-body">
									<form onSubmit={ this.handleSubmit }>
										<div className="form-group">
											<label>New Category Name</label>
											<input type="text" className="form-control" id="categoryName" required onChange={ this.handleChange } />
										</div>
										<div>{ this.state.message === 'SUCCESS' &&
													<div className="alert alert-success alert-dismissable shadow fade show text-center">
														<button type="button" className="close" data-dismiss="alert">&times;</button>
														{ `Category ${this.state.categoryName.toUpperCase()}  added successfully!`}
													</div>}
										</div>
										<button type="submit" className="btn btn-block btn-primary">Submit</button>
									</form>
								</div>
							</div>
						</div>
						<div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
						<div className="bg-primary p-2"><h4 className="text-white text-center">Existing Categories</h4></div>
							<div className="form-group">
								<table className="table table-striped table-bordered">
									<thead>
										<tr><th>SN</th><th>Category Name</th><th><span><i className="fa fa-cog"></i></span></th></tr>
									</thead>
									<tbody>
										{this.state.existingCategories.map((category, index) =>
											<tr key={ index }>
												<td>{index+1}</td>
												<td value={ category.id } key={ index }>{ category.category_name }</td>
												<td><span className="pointer"><i className="fa fa-edit"></i></span></td>
											</tr>
										)}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default AddCategory