import React from "react";
import { useParams } from "react-router-dom";
import useAPI from "../../hooks/API/useAPI";

function Product() {
    let { id } = useParams();

    const { data, isLoading, isError } = useAPI(
        `https://api.noroff.dev/api/v1/online-shop/${id}`,
      );

    

    return (
        <div className="individual-product">Individual post id: {data.id}
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <img src={data.imageUrl}/>
            <div className="product-price">
                <p>{data.price}</p>
                <p>{data.discountedPrice}</p>
            </div>
            <div>
                <h2>Reviews</h2>
                {data.reviews && data.reviews.length > 0 ? (
                <ul>
                {data.reviews.map((review) => (
                    <li key={review.id}>
                        <strong>{review.username}</strong>
                        <p>Rating: {review.rating}</p>
                        <p>{review.description}</p>
                        <hr></hr>
                    </li>
                ))}
                
                </ul>
                ) : (
                    <p>No reviews available</p>
                )}

            </div>
        </div>
        )
}

export default Product;