import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Categories from './components/Categories';
import Cart from './components/Cart';
import Products from './components/admin/Products';
import AddProduct from './components/admin/AddProduct';
import AddCategory from './components/admin/AddCategory';
import ProductInfo from './components/ProductInfo';
import Login from './components/Login';
import Signup from './components/Signup';
import axios from 'axios';

class App extends React.Component {
	state = {
        categories: [],
        cart: [],
        error: []
   };
   componentDidMount = async () => {
   	try {
   		const res = await axios.get('/admin/products.php');
		   this.setState({ categories: res.data });
   		console.log(this.state.categories)
   	} catch(err) {
   		console.log(err)
		   // this.setState({ error: err });
   	}
   };
	handleAddToCart = (item) => {
		this.setState({ cart: [...this.state.cart, item] })
	};
	render(){
		return (
			<div>
				<Router>
					<div>
						<Navbar totalCart={ this.state.cart } />
						{/* this.state.error !== undefined && <h5>Error Fetching Items: { this.state.error } </h5> */}
						<Switch>
							<Route exact path="/" component={ Home } />
							<Route totalCart={ this.state.cart } path="/cart" component={ Cart } />
							<Route path="/admin/products/all" component= { Products } />
							<Route path="/product/:id" component={ ProductInfo } />
							<Route path="/admin/products/add" component={ AddProduct } />
							<Route path="/admin/products/category" component={ AddCategory } />
							<Route path="/user/login" component={ Login } />
							<Route path="/user/signup" component={ Signup } />
							<Route path="*" component={ NotFound } />
						</Switch>
                	<Categories categories={ this.state.categories } onAddToCart={ this.handleAddToCart } />
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
