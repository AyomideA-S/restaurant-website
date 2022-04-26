import React from 'react';
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar= () =>{
    return (
        <div className="app_navbar">
            <div className="app_navbar-left">
                <input type="text" placeholder="Search" />
            </div>
            <div className="app_navbar-right">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/menu">Menus</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </div>
        </div>
    );
}
export default Navbar;