import React, { Component } from 'react';
// import Navbar from './Navbar';
import Display from './Display';
// import Categories from './Categories';
// import axios from 'axios';

class Home extends Component {
    // categories = [
    //     {
    //         name: "Clothes",
    //         items: [
    //             {id: 1, itemName: 'cloth1', img: 'cloth1.jpg', price: 1000},
    //             {id: 2, itemName: 'cloth2', img: 'cloth2.jpg', price: 1500},
    //             {id: 3, itemName: 'cloth3', img: 'cloth1.jpg', price: 2000},
    //             {id: 4, itemName: 'cloth4', img: 'cloth2.jpg', price: 2500},
    //             {id: 5, itemName: 'cloth5', img: 'cloth1.jpg', price: 3000},
    //             {id: 6, itemName: 'cloth6', img: 'cloth2.jpg', price: 3500},
    //             {id: 7, itemName: 'cloth7', img: 'cloth1.jpg', price: 4000},
    //             {id: 8, itemName: 'cloth8', img: 'cloth1.jpg', price: 4500},

    //         ]
    //     },
    //     {
    //         name: "Shoes",
    //         items: [
    //             {id: 9, itemName: 'shoe1', img: 'shoe1.jpg', price: 5000},
    //             {id: 10, itemName: 'shoe2', img: 'shoe1.jpg', price: 5500},
    //             {id: 11, itemName: 'shoe3', img: 'cloth1.jpg', price: 6000},
    //             {id: 12, itemName: 'shoe4', img: 'shoe1.jpg', price: 6500},
    //             {id: 13, itemName: 'shoe5', img: 'cloth1.jpg', price: 7000},
    //             {id: 14, itemName: 'shoe6', img: 'shoe1.jpg', price: 7500},
    //             {id: 15, itemName: 'shoe7', img: 'cloth1.jpg', price: 8000},
    //             {id: 16, itemName: 'shoe8', img: 'cloth1.jpg', price: 8500},

    //         ]
    //     },
    //     {
    //         name: "Bags",
    //         items: [
    //             {id: 17, itemName: 'bag1', img: 'bag1.jpg', price: 9000},
    //             {id: 18, itemName: 'bag2', img: 'cloth1.jpg', price: 10000},
    //             {id: 19, itemName: 'bag3', img: 'bag1.jpg', price: 100},
    //             {id: 20, itemName: 'bag4', img: 'cloth1.jpg', price: 200},
    //             {id: 21, itemName: 'bag5', img: 'bag2.jpg', price: 300},
    //             {id: 22, itemName: 'bag6', img: 'cloth1.jpg', price: 400},
    //             {id: 23, itemName: 'bag7', img: 'cloth1.jpg', price: 500},
    //             {id: 24, itemName: 'bag8', img: 'bag2.jpg', price: 600},

    //         ]
    //     }
    // ]
    // state = {
    //     categories: [],
    //     cart: [],
    //     errors: []
    // };
    // componentDidMount = () => {
    //     axios.get('/products.php').then(res => {
    //         this.setState({ categories: res.data });
    //         console.log(this.state.categories)
    //     }).catch(err => {
    //         console.log(err)
    //     })
    // }
    // handleAddToCart = (item) => {
    //     this.setState({ cart: [...this.state.cart, item] })
    // };
    render() {
        return (
            <div>
                {/*<Navbar totalCart={ this.state.cart } />*/}
				<Display />
                {/*<Categories categories={ this.props.categories } onAddToCart={ this.props.handleAddToCart } />*/}
            </div>
         );
    }
}

export default Home;