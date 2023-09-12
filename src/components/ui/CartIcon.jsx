import React, { useState } from "react";
function CartIcon() {
    const [cartCount, setCartCount] = useState(0);

    return (
        <div>
            <span>Cart</span>
            <span className="cart-icon">🛒 {cartCount} </span>
        </div>
    )
}
export default CartIcon;