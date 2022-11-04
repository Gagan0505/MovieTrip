import React from "react";
import "./Homepage.css";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Row from "../../components/Row/Row"
import requests from "../../requests/requests";

function HomePage() {
    return (
        <div> 
            <Navbar showSignInButton={false} logOut={true} />
            <Banner />
            <Row title ="Movie Box HITS" 
            fetchUrl = "https://api.themoviedb.org/3/trending/all/week?api_key=20e36c67eb6a93cdc35a8cff930c9893&language=en-US"
            isLargeRow
            />
            <Row title ="Action" 
            fetchUrl= "https://api.themoviedb.org/3/trending/all/week?api_key=20e36c67eb6a93cdc35a8cff930c9893&language=en-US"
            
            />
            <Row title ="Adventure" 
            fetchUrl = "https://api.themoviedb.org/3/trending/all/week?api_key=20e36c67eb6a93cdc35a8cff930c9893&language=en-US"
            
            />
            <Row title ="Comedy" 
            fetchUrl = "https://api.themoviedb.org/3/trending/all/week?api_key=20e36c67eb6a93cdc35a8cff930c9893&language=en-US"
            
            />
            <Row title ="Romance" 
            fetchUrl = "https://api.themoviedb.org/3/trending/all/week?api_key=20e36c67eb6a93cdc35a8cff930c9893&language=en-US"
            
            />
            
        
        </div>
    
    );
}

export default HomePage;