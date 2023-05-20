import React from "react";
import tm_taylor_img from './../Assets/tm_taylor_img.png';
// import navigation

export default function Header() {
    return (
        <header>
            <img className="companyLogo" src={tm_taylor_img} alt="Company Logo"/>
        </header>
    )
};