import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

const base_url = "http://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  // A snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    // if [], run once when the page loads and don't run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // "https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=28"
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {/* row__poster */}

        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
