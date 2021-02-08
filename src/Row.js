import React, { useState, useEffect } from 'react';
import axios from './axios';

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

    // A snippet of code which runs based on a specific condition/variable
    useEffect(() => {
       // if [], run once when the page loads and don't run again
       async function fetchData() {
           const request = await axios.get(fetchUrl);
           // "https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=28"
           console.log(request);
           return request;
       }
       fetchData();
    }, []);

    return (
        <div>
            <h2>{title}</h2>

            {/* container -> posters */}
        </div>
    )
}

export default Row
