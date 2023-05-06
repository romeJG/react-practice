import React from "react";
import logo from '../files/react-logo.png';

export default function MainContent() {
    return (
        <div className="mainContent">
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan walke</li>
                <li>has over 100k stars on github</li>
                <li>is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            <img src={logo} className="rotating" />
        </div>

    )
}