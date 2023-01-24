import React from "react";
import "./Homepage.css";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Row from "../../components/Row/Row"


function HomePage() {
    return (
        <div className="HomepageContainer"> 
            <Navbar showSignInButton={false} logOut={true} />
            <Banner />
            <Row title ="Movie Trip HITS" 
            fetchUrl = "https://api.themoviedb.org/3/trending/all/week?api_key=20e36c67eb6a93cdc35a8cff930c9893&language=en-US"
            isLargeRow
            />
            <Row title ="Action" 
            fetchUrl= "https://api.themoviedb.org/3/discover/movie?api_key=20e36c67eb6a93cdc35a8cff930c9893&with_genres=28"
            isLargeRow
            
            />
            
            <Row title ="Horror" 
            fetchUrl = "https://api.themoviedb.org/3/discover/movie?api_key=20e36c67eb6a93cdc35a8cff930c9893&with_genres=27"
            isLargeRow
            />
            <Row title ="Comedy" 
            fetchUrl = "https://api.themoviedb.org/3/discover/movie?api_key=20e36c67eb6a93cdc35a8cff930c9893&with_genres=35"
            isLargeRow
            />
            <Row title ="Documentaries" 
            fetchUrl = "https://api.themoviedb.org/3/discover/movie?api_key=20e36c67eb6a93cdc35a8cff930c9893&with_genres=99"
            isLargeRow
            />
            
        
        </div>
    
    );
}

export default HomePage;