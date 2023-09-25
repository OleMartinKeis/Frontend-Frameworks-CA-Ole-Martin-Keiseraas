import React, { useEffect, useState } from 'react';
import useAPI from '../../hooks/API/useAPI'
import { Link } from 'react-router-dom';
import SearchBar from '../ui/SearchBar';

function HomeApp() {
    const [userInput, setUserInput] = useState('');
    const { data, isLoading, isError } = useAPI("https://api.noroff.dev/api/v1/online-shop");


    return (
        <div>
        
        <SearchBar />
        </div>
    )

}

export default HomeApp;