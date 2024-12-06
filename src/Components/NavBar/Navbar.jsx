import React from 'react';
import n from "./navbar.module.css"

const Navbar = () => {
    return (
        <nav className={n.appNav}>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;