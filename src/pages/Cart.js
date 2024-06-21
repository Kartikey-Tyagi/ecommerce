import React, { useContext } from 'react';
import { CartContext } from '../context/Context';
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoMdRemoveCircleOutline } from "react-icons/io";

const Cart = () => {
  const globalState = useContext(CartContext);
  const state = globalState.state;
  const dispatch = globalState.dispatch;
  const calculateTotalAmount = () => {
    let amount = 0;
    state.forEach(item => {
      amount += item.price * item.qty
    });
    return parseFloat(amount).toFixed(2)
  }

  return (
    <>
      <h1 className='heading' >Your Shopping Cart</h1>
      <div className="cart_container">
        {state.map(product => {
          return <div key={product.id} className="cart_item_container">
            <img src={product.image} width={50} height={50} />
            <div className="cart_item_details">

              <h4>{product.title}</h4>
              <div className="item_quantity">
                <div className="flexbox">
                  <IoMdRemoveCircleOutline className='qty_manage_btns remove' onClick={() => dispatch({ type: product.qty > 1 ? 'Decrement' : 'Delete', payload: product })} />
                  {product.qty}
                  <IoMdAddCircleOutline className='qty_manage_btns add' onClick={() => dispatch({ type: 'Increment', payload: product })} />
                </div>
                <p>₹{product.qty * product.price}</p>
              </div>
            </div>
          </div>
        })}
      </div>
      <div className='horizontal_line_break'></div>
      {state.length >= 1 && <div className="total_cart_amount">
        <p>Total</p>
        <span>₹{calculateTotalAmount()}</span>
      </div>}
      {state.length === 0 && <h3 className='heading'>Your cart is empty</h3>}
    </>
  )
}

export default Cart