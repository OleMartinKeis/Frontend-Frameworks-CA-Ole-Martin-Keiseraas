import React, { useEffect, useState } from 'react';
import useAPI from '../../hooks/API/useAPI'
import { Link } from 'react-router-dom';


function HomeApp() {
    
    const { data, isLoading, isError } = useAPI(
        'https://api.noroff.dev/api/v1/online-shop',
      );

    return (
        <div>
            <input type='text'></input>
            {data.map((data) => (
                <div key={data.id}>
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                    <Link to={`/product/${data.id}`}>View Product!</Link>
                    <img src={data.imageUrl}/>
                </div>
            ))}
        </div>
    )

}

export default HomeApp;