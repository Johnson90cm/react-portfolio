import React from "react";
import "./style.css"

function Nav() {

    return (
        <nav>
            <ul className="flex-row space-around bold">
                <li><a href="/" ><div className="btn from-top">+ home +</div></a></li>
                <li><a href="/about">\ about \</a></li>
                <li><a href="/contact">\ contact \</a></li>
                <li><a href="/work">+ my work +</a></li>
            </ul>
        </nav>
    )
}

export default Nav;