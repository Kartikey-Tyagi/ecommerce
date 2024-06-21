import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import React from 'react';
import Cart from './pages/Cart';
import { FaShoppingCart } from "react-icons/fa";
import ProductDetails from './pages/ProductDetails';


function App() {
  return (
    <Router>
      <nav className='navbar'>
        <Link to="/" style={{ padding: 5 }}>
          Home
        </Link>
        <Link to="/cart" style={{ padding: 5 }}>
          <FaShoppingCart />
          Cart
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
