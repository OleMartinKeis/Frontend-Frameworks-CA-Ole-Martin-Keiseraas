import React, { useEffect, useState } from 'react';
import useAPI from '../../hooks/API/useAPI'
import { Link } from 'react-router-dom';
import SearchBar from '../ui/SearchBar';

function HomeApp() {
    const [userInput, setUserInput] = useState('');
    const { data, isLoading, isError } = useAPI("https://api.noroff.dev/api/v1/online-shop");

    // const handleInputChange = (e) => {
    //     const inputText = e.target.value;
    //     setUserInput(inputText);
    // }

    // useEffect(() => {
        
    //     if (userInput) {
    //         // Only make the API request if there's user input
    //         useAPI(`https://api.noroff.dev/api/v1/online-shop?query=${userInput}`);
    //     }
    // }, [userInput]);

    return (
        <div>
        {/* <input
            type='text' value={userInput} placeholder='Search...' onChange={handleInputChange}
        /> */}
        <SearchBar />
        </div>
    )

}

export default HomeApp;