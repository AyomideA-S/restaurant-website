import React from 'react';
import { Link } from "react-router-dom";
import { Navbar } from 'react-bootstrap'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FaSearch } from "react-icons/fa";
import "./navbar.css";

const navbar= () =>{
    return (
        <div>
            <Navbar bg="dark" variant="dark" className="app_navbar">
                <div className="brand">
                    <Link to="/">Starterkit</Link>
                </div>
                <div className="app_navbar-left">
                    <div class="search-box">
                        <button class="btn-search"><FaSearch /></button>
                        <input type="text" className="input-search" placeholder="Search..." required />
                    </div>
                </div>
                <div className="app_navbar-right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/product">Products</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </div>
            </Navbar>
        </div>
    );
}
export default navbar;