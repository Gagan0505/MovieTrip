import React from "react";
import "./Homepage.css";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Row from "../../components/Row/Row"
import requests from "../../requests/requests";

function HomePage() {
    return (
        <div className="HomepageContainer"> 
            <Navbar showSignInButton={false} logOut={true} />
            <Banner />
            
            <Row title= "Trending NOW" 
            fetchUrl={`https://api.themoviedb.org/3/${requests.fetchTrending}`}
            isLargeRow
            />
            {/* <Row title ="NETFLIX Originals" 
            fetchUrl = {`https://api.themoviedb.org/3/${requests.fetchNetflixOriginals}`}
            isLargeRow
            /> */}
            <Row title ="Action" 
            
            fetchUrl= {`https://api.themoviedb.org/3/${requests.fetchActionMovies}`}
            isLargeRow
            
            />
            
            <Row title ="Horror" 
            fetchUrl = {`https://api.themoviedb.org/3/${requests.fetchHorrorMovies}`}
            isLargeRow
            />
            <Row title ="Comedy" 
            fetchUrl = {`https://api.themoviedb.org/3/${requests.fetchComedyMovies}`}
            isLargeRow
            />
            <Row title ="Documentaries" 
            fetchUrl = {`https://api.themoviedb.org/3/${requests.fetchDocumentaries}`}
            isLargeRow
            />
            
        
        </div>
    
    );
}

export default HomePage;