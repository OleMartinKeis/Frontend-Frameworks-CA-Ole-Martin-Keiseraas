import React, { useState, useEffect } from "react";
import useAPI from "../../hooks/API/useAPI";
import { Card, Button } from "react-bootstrap";


function SearchBar() {
    var url = '';
    const [userInput, setUserInput] = useState('');
    const { data: ApiData, isLoading, isError } = useAPI(`https://api.noroff.dev/api/v1/online-shop?query=${userInput}`);

    const handleInputChange = (e) => {
        const inputText = e.target.value;
        setUserInput(inputText);
    };

    const filteredData = ApiData.filter((item) => 
    item.title.toLowerCase().includes(userInput.toLowerCase())
    );


    return (
        <div>
            <input className="searchbar" type='text' value={userInput} placeholder='Search...' onChange={handleInputChange}></input>
            <div>
                {isLoading ? (
                    <p>Loading...</p>
                ) : isError ? (
                    <p>Error fetching data.</p>
                ) : (
                    <div>
                        {filteredData.map((item) => (
                            <Card key={item.id} className="product-card">
                                <Card.Img className="shop-img" src={item.imageUrl} variant="top" alt={item.title} />
                                <Card.Body>

                                    
                                <Card.Title className="text-align-center">{item.title}</Card.Title>
                                <Card.Text>{item.description}</Card.Text>
                                <Button href={`/product/${item.id}`}>View Product!</Button>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchBar;