import React from "react";

function Nav() {

    return (
        <nav>
            <ul className="flex-row space-around bold">
                <li><a href="/">+ home +</a></li>
                <li><a href="/about">| about |</a></li>
                <li><a href="/contact">\ contact \</a></li>
                <li><a href="/work">* my work *</a></li>
            </ul>
        </nav>
    )
}

export default Nav;