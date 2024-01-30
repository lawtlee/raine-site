import React from "react";
import "../styles/navbar.scss";

const Navbar: React.FC = () => {
    return(
        <div className="navbar">
            <div className="sides">
                <a href="/photos" className="link"> photos </a>
                <a href="/projects" className="link"> projects </a>
                <a href="/merch" className="link"> merch </a>
            </div>
            <div>
                <a href="/" className="center"> raine's music </a>
            </div>
            <div className="sides">
                <a href="/about" className="link"> about </a>
                <a href="/press" className="link"> press </a>
                <a href="/contact" className="link"> contact </a>
            </div>
        </div>
    )
}

export default Navbar