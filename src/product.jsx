// import React from 'react';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Product extends Component {
    state = { 
    products:[
        {id:1, name:'product1'},
        {id:2,name:'product2'},
        {id:3, name:'product3'}
    ]    
     };

    

    render() { 
        return (  
            <div>
            <ul>
                {this.state.products.map(
                    product =>(
                <li key={product.id}>
                <a href={`/products/${product.id}`}>{product.name}</a>
                </li>
                    ))}
            </ul>
            <Link to="/product1">See more on product1</Link>
            </div>
        );
    }
}
 
export default Product;