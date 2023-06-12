import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    "Unlock the Magic of Cinema: Explore, Discover, and Share the Best Movies with Our Expert Reviews."<br>
"Experience the World of Movies: Engage with Captivating Reviews and Uncover Hidden Gems."<br>
"Your Ultimate Movie Companion: Expert Reviews and Recommendations for Every Film Lover."<br>
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <a href="https://www.facebook.com/"> <FaFacebookF /> </a>
                    </span>
                    <span className="icon">
                        <a href="https://www.instagram.com/"> <FaInstagram /> </a>
                    </span>
                    <span className="icon">
                        <a href="https://twitter.com/"> <FaTwitter /> </a>
                    </span>
                    <span className="icon" inherited color="white">
                        <a href="https://www.linkedin.com/"> <FaLinkedin /> </a>
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
