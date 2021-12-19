import React from "react";
// import { AnimateSharedLayout } from "framer-motion"

import "./mysass.scss"

function Project(props) {

    return (
        <div class="card">
            <div class="title">{props.name}</div>

            <div class="icon">
                <i class={props.technologies1}></i>
                <i class={props.technologies2}></i>
                <i class={props.technologies3}></i>
                <i class={props.technologies4}></i>
                <i class={props.technologies5}></i>
            </div>

            <div class="features">
                <ul>
                    <li>{props.description}</li>
                </ul>
            </div>

            <a href="#" class="btn">View Project</a>
        </div>
    )
}

export default Project;