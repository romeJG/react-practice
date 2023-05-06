import React from "react";

//import the react logo and store it as a logo var
import logo from '../files/react-logo.png';


export default function Header() {
    return (
        <header>
            <nav className="nav">
                <div className="react">
                    <img src={logo} className="logo rotating" />
                    <h2 className="logo-text">React Facts</h2>
                </div>
                <ul className="nav-items">
                    <li className="">React Course - Project 1</li>
                </ul>
            </nav>
        </header>
    )
}