import React from "react";
import Project from "../Project"
import './mysass.scss'

function Gallery() {

    return (

        <div className="border transparent flex-row scroll">
            <Project></Project>
            <Project></Project>
            <Project></Project>
            <Project></Project>
            <Project></Project>
            <Project></Project>
            <Project></Project>
            <Project></Project>
            <Project></Project>
        </div>

    )
}

export default Gallery;