import React, { useState } from "react";
// import { AnimateSharedLayout } from "framer-motion"

import "./mysass.scss"

function Project() {

    return (

        <div class="card">
            <div class="title">Flix-Fix</div>

            <div class="icon">
                <i class="devicon-html5-plain"></i>
                <i class="devicon-react-original"></i>
                <i class="devicon-javascript-plain"></i>            </div>
            <div class="features">
                <ul>
                    <li>A place to review movies with your friends!</li>
                </ul>
            </div>

            <a href="#" class="btn">View Project</a>
        </div>

    )
}

export default Project;