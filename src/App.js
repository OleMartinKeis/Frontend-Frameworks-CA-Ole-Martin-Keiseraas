import React, { createContext, useState, useEffect } from 'react';
import './App.css';
import Layout from './components/ui/Layout';
import CartIcon from './components/ui/CartIcon';
import { Routes, Route } from 'react-router-dom'
import Product from './components/pages/Product'
import Cart from './components/pages/Cart'
import Checkout from './components/pages/Checkout';
import HomeApp from './components/pages/Home';
import ContactApp from './components/pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

export const CartContext = createContext([]);


function App() {
    const [cart, setCart] = useState([]);
    const value = {cart, setCart};
    useEffect(() => {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
          setCart(JSON.parse(savedCart));
        }
      }, []);
    
      useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
      }, [cart]);

  return (
    
        <CartContext.Provider value={value}>
            <Layout>
                <CartIcon />
            </Layout>
            <Routes>
                <Route path="home" element={<HomeApp />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="product/:id" element={<Product />} />
                <Route path="cart" element={<Cart />} />
                <Route path="contact" element={<ContactApp />} />
            </Routes>
        </CartContext.Provider>
    
  );
}

export default App;
