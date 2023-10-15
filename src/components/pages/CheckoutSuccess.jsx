import React from "react";
import { Alert } from "react-bootstrap";
import styles from "../../scss/cart/Alert.module.scss"

function CheckoutSuccess() {

    return (
        <Alert className={styles.Alert} variant="success">
            <Alert.Heading>Your order was successfully placed!</Alert.Heading>
            <p>
                Thank you for taking your time and looking through my project!
            </p>
            <hr />
            <p className="mb-0">
                <a href="/home">Click here</a> to go back home!
            </p>
        </Alert>
    )
}

export default CheckoutSuccess;