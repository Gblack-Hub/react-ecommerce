import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

class Signup extends Component {
	state = {
		firstName: '', lastName: '', password: '', email: '', message: '', userData: '', error: null
	};
	handleChange = (e) => {
		this.setState({ [e.target.id]: e.target.value })
	};
	handleSubmit = async (e) => {
		e.preventDefault();
		this.setState({
			userData: {
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				email: this.state.email,
				password: this.state.password,
			}
		})
		try {
			const res = await axios.post("/users/signup.php", this.state.userData);
			console.log(res);
			this.setState({ message: res.data });
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
							<h2 className="text-center">Sign Up</h2>
							<form onSubmit={ this.handleSubmit }>
								<div className="form-group">
									<label>First Name</label>
									<input type="text" className="form-control" required id="firstName" onChange={ this.handleChange } />
								</div>
								<div className="form-group">
									<label>Last Name</label>
									<input type="text" className="form-control" required id="lastName" onChange={ this.handleChange } />
								</div>
								<div className="form-group">
									<label>Email</label>
									<input type="text" className="form-control" required id="email" onChange={ this.handleChange } />
								</div>
								<div className="form-group">
									<label>Password</label>
									<input type="password" className="form-control" required id="password" onChange={ this.handleChange } />
								</div>
								<div>{ this.state.message === 'SUCCESS' &&
											<div className="alert alert-success alert-dismissable shadow fade show text-center">
												<button type="button" className="close" data-dismiss="alert">&times;</button>
												<span>You have successfully signed up, click <Link to="/user/login">here</Link> to proceed to login</span>
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