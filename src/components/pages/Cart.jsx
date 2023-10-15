import React, { useEffect, useContext, reduce } from "react";
import { CartContext } from "../../App";
import { Button, Card } from "react-bootstrap";
import btnstyles from "../../scss/button/Button.module.scss"
import styles from "../../scss/cart/Checkout.module.scss"

function Cart() {
    const { cart, setCart } = useContext(CartContext);

    const emptyCart = () => {
        setCart([]);
    }

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
    <div className={styles.CenterDiv}>
        <Card className={styles.CheckoutCard}>
            <ul>
                {cart.map((item) => (
                <li className={styles.CardList} key={item.id}>
                    <Card.Title className={styles.CardTitle}>{item.title}</Card.Title>
                    {item.discountedPrice ? (
                    <Card.Text>Price: {item.discountedPrice}kr.</Card.Text>
                    ) : (
                    <Card.Text>Price: {item.price}kr.</Card.Text>
                    )}
                    <Card.Text>Quantity: {item.quantity}</Card.Text>
                    <hr className={styles.CardLine}></hr>
                </li>
                ))}
            </ul>
            <Card.Footer className={styles.CardFooter}>
                <p>Total Price: {total}kr.</p>
            </Card.Footer>
            <Button onClick={emptyCart} href="/CheckoutSuccess" className={`button-color ${btnstyles['button-color']} ${styles['CheckoutButton']}`}>Checkout</Button>
        </Card>

    </div>
  );
}

export default Cart;




