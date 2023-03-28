import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shops.css'

const Shops = () => {
    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    const handleAddToCart = (product) => {
       const newCart = [...cart, product]; 
       setCart(newCart);
    }

    return (
        <div className='shop-container'>
           <div className='products-container'>
            {
                product.map(product => <Product
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
                ></Product>)
            }
           </div>
           <div className='cart-container'>
                <h3>Order Summary</h3>
                <p>total: {cart.length}</p>
           </div>
        </div>
    );
};

export default Shops;<h1>This is shops pag</h1>