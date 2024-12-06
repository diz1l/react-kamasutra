import React from 'react';
import h from "./header.module.css"

const Header = () => {
    return (
        <header className={h.appHeader}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Emblem_of_Kazakhstan_3d.svg/1200px-Emblem_of_Kazakhstan_3d.svg.png"
                alt="Kazakhstan"/>
        </header>
    )
}

export default Header;