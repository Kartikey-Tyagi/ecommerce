import React, { useContext, useEffect, useState } from 'react'
import axios, * as others from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, Outlet } from "react-router-dom"
import { CartContext } from '../context/Context';

const Home = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [error, setError] = useState('');

  const notify = () => toast.success("Added to cart");

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then(res => {
      if (res.status == 200) {
        setAllProducts(res.data);
      }
    }).catch(err => {
      setError(err.message);
    })
  }, []);

  const globalState = useContext(CartContext);
  const dispatch = globalState.dispatch;
  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
    notify();
  }

  return (
    <>
      <h1 className='heading'>{!error ? 'Products' : error}</h1>
      <div className="home_container">
        {allProducts.map(product => {
          product.qty = 1
          return <div key={product.id} className="product_container">
            <Link className='productDetails_link' to={`/product/${product.id}`} state={product} >
              <div className="product_img">
                <img src={product.image} width={100} height={100} alt={product.title} />
              </div>
              <div className="product_overview">
                <p>Rating: {product.rating.rate}/5</p>
                <h4>{product.title}</h4>
                <h3>₹{product.price}</h3>
              </div>
            </Link>
                <button className='add_to_cart' onClick={() => addToCart(product)}>Add to cart</button>
          </div>
        })}
        <ToastContainer position='top-right' autoClose={1000} />
        <Outlet />
      </div>
    </>
  )
}

export default Home