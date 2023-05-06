import React from "react";

//import the react logo and store it as a logo var
import logo from './files/react-logo.png';


export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img src={logo} className="logo" />
                <ul className="nav-items">
                    <li className="">Pricing</li>
                    <li className="">About</li>
                    <li className="">Contact</li>
                </ul>
            </nav>
        </header>
    )
}