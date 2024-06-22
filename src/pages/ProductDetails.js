import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { CartContext } from '../context/Context';
import { ToastContainer, toast } from 'react-toastify';

const ProductDetails = () => {
    const { state } = useLocation();
    const globalState = useContext(CartContext);
    const dispatch = globalState.dispatch;

    const notify = () => toast.success("Added to cart");

    const addToCart = (item) => {
        dispatch({ type: 'ADD_TO_CART', payload: item });
        notify();
    }

    return (
        <>
            <div className="product_details_container">
                <div className="productImgContainer">
                    <img src={state.image} alt={state.title} />
                </div>
                <div className="product_details">
                    <h1 className='productDetailsTitle'>{state.title}</h1>
                    <p>Category: {state.category}</p>
                    <h3>₹{state.price}</h3>
                    <p>Rating: {state.rating.rate}/5</p>
                    <p className='product_desc'>{state.description}</p>
                    <button className='addToCartDetails' onClick={() => addToCart(state)}>Add to Cart</button>
                </div>
            </div>
            <ToastContainer position='top-right' autoClose={1000} />
        </>
    )
}

export default ProductDetails