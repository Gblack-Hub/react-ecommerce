import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './assets/item.css';
class Item extends Component {
    state = {
        quantity: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    };
    // handleViewProductInfo = (id) => {
    //     console.log(id)
    // }
    render() {
        let { details } = this.props;
        let { id } = this.props.details;
        return (
            <div className="col-md-3 mb-3">
                {/*<Link to={{ pathname:`/product/${id}`, state: { cartList: 'this.props.totalCart' } }} className="card shadow pointer">*/}
                <div to={{ pathname:`/product/${id}`, state: { cartList: 'this.props.totalCart' } }} className="card shadow pointer">
                    <img className="card-img-top img" src={ require('./assets/images/bag1.jpg') } alt="{details.product_name}" />
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <div className="text-center">{ details.product_name }</div>
                            {/*<div>
                                <select className="form-control form-control-sm">
                                    { this.state.quantity.map((q, i) => (
                                        <option key={ i }>{ q }</option>
                                    ))}
                                </select>
                            </div>*/}
                            <div><strong>${ details.price }</strong></div>
                        </div>
                        <div className="mb-1"><small>{ details.description }</small></div>
                        <button type="button" onClick={ () => this.props.onAddToCart(this.props.details) } className="btn btn-block btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
         );
    }
}

export default Item;