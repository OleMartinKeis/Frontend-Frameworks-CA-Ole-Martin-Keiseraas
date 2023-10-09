import React, { useEffect, useContext, reduce } from "react";
import { CartContext } from "../../App";

function Cart() {
    const { cart } = useContext(CartContext);

  if (!cart || cart.length === 0) {
    return (
      <div>
        <h2>Cart</h2>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  const total = cart.reduce((acc, item) => {
    const itemPrice = item.discountedPrice ? item.discountedPrice : item.price;
    return acc + itemPrice * item.quantity;
  }, 0);

  return (
    <div>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <p>{item.title}</p>
            {item.discountedPrice ? (
              <p>Price: {item.discountedPrice}</p>
            ) : (
              <p>Price: {item.price}</p>
            )}
            <p>Quantity: {item.quantity}</p>
          </li>
        ))}
      </ul>
      <p>Total Price: {total}</p>
      <button>Checkout</button>
    </div>
  );
}

export default Cart;




