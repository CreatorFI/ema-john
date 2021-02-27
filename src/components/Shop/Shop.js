import React, { useState } from "react";
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product'
import Cart from "../Cart/Cart";


const Shop = () => {
    const firstTen = fakeData.slice(0, 10);
    const [products, SetProducts] = useState(firstTen);
    const [cart, setCart] =useState([]);
    
    const handleAddProduct =(product) =>{
        console.log(product);
        const newCart =[...cart, product]
        setCart(newCart);
    }

    console.log(firstTen);
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(productItem => <Product 
                        handleAddProduct ={handleAddProduct}
                        product ={productItem}></Product>)
                }
            </div>
            <div className="cart-container">
                <h3>Total Order: {cart.length}</h3>
                <Cart cart ={cart}></Cart>
            </div>
        </div>
    )
}
export default Shop;