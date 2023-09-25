import React, { useState, useEffect } from "react";
import useAPI from "../../hooks/API/useAPI";

function SearchBar() {
    var url = '';
    const [userInput, setUserInput] = useState('');
    const [apiData, setApiData] = useState([]);
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
            <input type='text' value={userInput} placeholder='Search...' onChange={handleInputChange}></input>
            <div>
                {isLoading ? (
                    <p>Loading...</p>
                ) : isError ? (
                    <p>Error fetching data.</p>
                ) : (
                    <div>
                        {filteredData.map((item) => (
                            <div key={item.id}>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                                <a href={`/product/${item.id}`}>View Product!</a>
                                <img src={item.imageUrl} alt={item.title} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchBar;