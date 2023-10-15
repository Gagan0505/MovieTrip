import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "axios";
import requests from "../../requests/requests";
import YouTube from "react-youtube";

function Banner() {
    const [movie, setMovie] = useState([]);
    const [trailerId, setTrailerId] = useState(null);
    const handleClick = (movie) => {
        if (trailerId) {
          setTrailerId(null);
        } else {
          fetchTrailerId(movie);
        }
      };

    const fetchTrailerId = async () => {
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
    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        const request = await axios.get(
            `https://api.themoviedb.org/3/${requests.fetchTrending}`
        );
        setMovie(
            request.data.results[
                Math.floor(Math.random()*request.data.results.length - 1)
            ]
        );
        // console.log(movie?.backdrop_path);
    }

    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0,n-1) + "..." : string;
    };

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
          autoplay: 1,
          origin: "http://localhost:3000",
        },
      };
        return(
        <>
        <div className="banner"
        style={{
            backgroundImage: movie?.backdrop_path
            ? `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})` 
            : 'url("http://s3-us-west-2.amazonaws.com/techvibes/wp-content/uploads/2017/04/24135159/Netflix-Background.jpg")',
            backgroundPosition: "center center",
            backgroundSize: "cover",
        }} >
            <div className="banner_contents">
                <h1> 
                    {" "}
                    {movie?.original_name || movie?.original_title} {" "}
                </h1>
                <div className="banner_buttons">
                    <button onClick={handleClick}>Play</button>
                    <button>MyList</button>
                </div>
                <h3>
                   {truncate(movie?.overview, 100)} 
                </h3>
            </div>
            
        </div>
        {trailerId && <YouTube videoId={trailerId} opts={opts} />}
        </>
    );
}

export default Banner;