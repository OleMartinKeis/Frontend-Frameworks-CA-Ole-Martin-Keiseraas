import React, { useContext } from "react";
import { CartContext } from "../../App";
import styles from "../../scss/navbar/Navbar.module.scss"

function CartIcon() {
    const { cart } = useContext(CartContext);

    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <div>
            <i className={'bi bi-cart ' + styles.cartclass}>🛒</i>
            {totalQuantity > 0 && (
                <span className="badge bg-secondary">{totalQuantity}</span>
            )}
        </div>
    )
}
export default CartIcon;