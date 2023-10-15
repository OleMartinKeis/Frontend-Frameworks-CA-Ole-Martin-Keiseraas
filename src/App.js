import React, { createContext, useState, useEffect } from 'react';
import './App.css';
import Layout from './components/ui/Layout';
import { Routes, Route } from 'react-router-dom'
import Product from './components/pages/Product'
import Cart from './components/pages/Cart'
import CheckoutSuccess from './components/pages/CheckoutSuccess';
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
                <Routes>
                    <Route path="/" element={<HomeApp />} />
                    <Route path="home" element={<HomeApp />} />
                    <Route path="checkoutsuccess" element={<CheckoutSuccess />} />
                    <Route path="product/:id" element={<Product />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="contact" element={<ContactApp />} />
                </Routes>
            </Layout>
        </CartContext.Provider>
    
  );
}

export default App;
