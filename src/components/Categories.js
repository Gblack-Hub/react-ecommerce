
import React, { Component } from 'react';
import Item from './Item';
class Categories extends Component {
    render() {
        return (
            <React.Fragment>
                <h3 className="text-center">Categories</h3>
                <div className="container-fluid">
                    <div className="row">
                        { this.props.categories.map((category, index) => (
                            <Item key={index} onAddToCart={ this.props.onAddToCart } details={ category } />
                        ))
                        }
                    </div>
                </div>
            </React.Fragment>
         );
    }
}

export default Categories;