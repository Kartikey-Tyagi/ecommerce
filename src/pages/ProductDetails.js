import React from 'react'
import { useLocation } from 'react-router-dom'

const ProductDetails = () => {
    const { state } = useLocation();
    return (
        <>
            <div className="product_details_container">
                <div className="productImgContainer">
                    <img src={state.image} width={300} height={300} />
                </div>
                <div className="product_details">
                    <h1>{state.title}</h1>
                    <p>Category: {state.category}</p>
                    <h3>₹{state.price}</h3>
                    <p>Rating: {state.rating.rate}/5</p>
                    <p className='product_desc'>{state.description}</p>
                    <button className='addToCartDetails'>Add to Cart</button>
                </div>
            </div>
        </>
    )
}

export default ProductDetails