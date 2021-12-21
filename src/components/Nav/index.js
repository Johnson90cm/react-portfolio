import React from "react";
import "./style.css"
import { NavLink } from 'react-router-dom'

function Nav() {

    return (

        <nav>
            <ul className="flex-row space-around bold">
                {/* <li><NavLink exact activeClassName="active" to='/'>+ about +</NavLink></li> */}
                <li><NavLink exact activeClassName="active" to='/about'>+ about +</NavLink></li>
                <li><NavLink exact activeClassName="active" to='/work'>\ work \</NavLink></li>
                <li><NavLink exact activeClassName="active" to='/contact'>+ contact +</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;