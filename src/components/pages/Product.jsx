import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import useAPI from "../../hooks/API/useAPI";
import { CartContext } from "../../App";
import btnstyles from "../../scss/button/Button.module.scss"
import { Button, Card } from "react-bootstrap";
import styles from "../../scss/ProductCards/SingleProductCard.module.scss"


function Product() {
    const { id } = useParams();
    const { setCart, cart } = useContext(CartContext)
    const { data: productData } = useAPI(
        `https://api.noroff.dev/api/v1/online-shop/${id}`
);


const isOnSale = productData.discountedPrice < productData.price;

const addToCart = () => {
        
    const existingItemIndex = cart.findIndex((item) => item.id === productData.id);
  
    if (existingItemIndex !== -1) {
        const updatedCart = [...cart];
        updatedCart[existingItemIndex].quantity += 1;
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        } else {
        const newItem = { ...productData, quantity: 1 };
        setCart((prevCart) => [...prevCart, newItem]);
        localStorage.setItem("cart", JSON.stringify([...cart, newItem]));
    }
  };


    if(!productData) {
        return <div>Loading...</div>
    }

  return (
    <div className={styles.DivTop}>
        <Card className={styles.SingleProduct}>
            <Card.Body>
                <Card.Title className={styles.ProductTitle}>{productData.title}</Card.Title>
                <Card.Text>{productData.description}</Card.Text>
                <Card.Img className={styles.cardImgContainer} src={productData.imageUrl} alt={productData.title} />
                <div className="product-price">
                    {isOnSale ? (
                        <p className={`${styles.SalePrice}`}>
                            Kr. {productData.price}
                        </p>
                        ) : (
                        <p>Kr. {productData.price}</p>
                        )}
                        {isOnSale && (
                        <p className={styles.onSalePrice}>On Sale: Kr. {productData.discountedPrice}</p>
                    )}
                </div>
                <Button className={`button-color ${btnstyles['button-color']}`} onClick={addToCart}>
                Add to cart
                </Button>
            </Card.Body>
            <Card.Footer>
                <h2>Reviews</h2>
                {productData.reviews && productData.reviews.length > 0 ? (
                <ul>
                    {productData.reviews.map((review) => (
                    <li key={review.id}>
                        <strong>{review.username}</strong>
                        <p>Rating: {review.rating}</p>
                        <p>{review.description}</p>
                        <hr />
                    </li>
                    ))}
                </ul>
                ) : (
                <p>No reviews available</p>
                )}
            </Card.Footer>
        </Card>
    </div>
  );
}

export default Product;