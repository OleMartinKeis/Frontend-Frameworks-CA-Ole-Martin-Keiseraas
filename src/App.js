import './App.css';
import Layout from './components/ui/Layout';
import CartIcon from './components/ui/CartIcon';
import { Routes, Route } from 'react-router-dom'
import Product from './components/pages/Product'
import Cart from './components/pages/Cart'
import Checkout from './components/pages/Checkout';
import HomeApp from './components/pages/Home';


function App() {
  return (
    <div>
    <Layout>
        <CartIcon />
    </Layout>
    <Routes>
        <Route path="home" element={<HomeApp />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="cart" element={<Cart />} />
    </Routes>
</div>
  );
}

export default App;
