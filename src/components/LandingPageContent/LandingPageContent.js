import React from "react";
import { Link } from "react-router-dom";
import "./LandingPageContent.css";

function LandingPageContent() {
    return (
        <div className="content_container">
            <p className="content_title">
                Unlimited Films, Anime, TV programs and more.
            </p>
            <p className="content_subtitle"> 
            Watch from anywhere. Cancel at anytime
            </p>
            <p className="content_desc">
                Ready to watch? Enter your Email to create or restart your membership. {" "}
            </p>
            <div className="content_input"> 
            <input type="text" />
            <Link to ="/sign-in">
            <button >GET STARTED</button>
            </Link>
            
            </div>
        </div>
    );
}

export default LandingPageContent;
