
import axios from "axios";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import "./Row.css";
import requests from "../../requests/requests";


function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const [trailerId, setTrailerId] = useState(null);

  const base_url = "https://image.tmdb.org/t/p/original/";
  
useEffect(() => {
  fetchData();
  
  //eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  async function fetchData() {
    const request = await axios.get(fetchUrl);
    setMovies(request.data.results);
  };
  

  const handleClick = (movie) => {
    if (trailerId) {
      setTrailerId(null);
    } else {
      fetchTrailerId(movie);
    }
  };

  const fetchTrailerId = async (movie) => {
    const date = movie.release_date ? movie.release_date : movie.first_air_date;
    const name = movie.title ? movie.title : movie.name;
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${encodeURIComponent(
        `${name} ${date.split("-")[0]} trailer`
      )}${requests.fetchtrailer}`
    );
    if (response.data.items.length > 0) {
      setTrailerId(response.data.items[0].id.videoId);
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
      origin: "http://localhost:3000",
    },
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies.map(
          (movie) =>
            movie.poster_path &&
            movie.backdrop_path && (
              <img
                key={movie.id}
                className={`row_poster ${isLargeRow && "rowPoster_large"}`}
                onClick={() => handleClick(movie)}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
      {trailerId && <YouTube videoId={trailerId} opts={opts} />}
    </div>
  );
}

export default Row;
