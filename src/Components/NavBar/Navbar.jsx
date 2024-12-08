import React from 'react';
import n from "./navbar.module.css"
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={n.appNav}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/dialogs">Dialogs</Link></li>
                <li><Link to="#">Services</Link></li>
                <li><Link to="#">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;