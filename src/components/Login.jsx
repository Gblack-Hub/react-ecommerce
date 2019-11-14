import React, { Component } from 'react'
import axios from 'axios'

class Signup extends Component {
	state = {
		password: '', email: '', userData: '', error: null
	};
	handleChange = (e) => {
		this.setState({ [e.target.id]: e.target.value })
	};
	handleSubmit = async (e) => {
		e.preventDefault();
		this.setState({
			userData: {
				email: this.state.email,
				password: this.state.password,
			}
		})
		try {
			const res = await axios.post("/users/login.php", this.state.userData);
			console.log(res);
		} catch(err) {
			console.log(err);
		}
	}

	render(){
		return (
			<div>
				<div className="container py-5">
					<div className="row">
						<div className="col-sm-12 col-md-3 col-lg-4 col-xl-4"></div>
						<div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
							<div className="card">
								<div className="card-header">
									<h4 className="text-center">Login</h4>
								</div>
								<div className="card-body">
									<form onSubmit={ this.handleSubmit }>
										<div className="form-group">
											<label>Email</label>
											<input type="text" className="form-control" required id="email" onChange={ this.handleChange } />
										</div>
										<div className="form-group">
											<label>Password</label>
											<input type="password" className="form-control" required id="password" onChange={ this.handleChange } />
										</div>
										<button type="submit" className="btn btn-block btn-primary">Submit</button>
									</form>
								</div>
							</div>
						</div>
						<div className="col-sm-12 col-md-3 col-lg-4 col-xl-4"></div>
					</div>
				</div>
			</div>
		)
	}
}

export default Signup