import React, { useState } from 'react';
import './product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { img, name, seller, price, stock } = props.product;
    const newProduct =[(props.product)]
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br />
                <p> <small>by:{seller}</small></p>
                <p>
                    ${price}
                </p>
                <br />
                <p> <small>ONLY {stock} LEFT IN STOCK!</small></p>
                <p>quantity:{newProduct.length}</p>
                <button onClick={() => props.handleAddProduct(props.product)} className="cart-button"> <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
            </div>
        </div>
    )
}
export default Product;