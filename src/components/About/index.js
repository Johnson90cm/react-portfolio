import React from "react";
import selfie from "./assets/placeholder.jpg"

import "./mysass.scss"

function About() {

    return (
        <div className="center border texture flex-row scroll">
            {/* <div className="div-item center">
                <img src={selfie} />
            </div> */}

            <div className="div-item center">
                <p className="center"> Hey there! My name is Colton. I am a recent graduate of the University of Utah's full-stack web development bootcamp. I enjoy creating front end experiences that are both awesome to look at as well as enjoyable to interact with. I am currently looking for web development oppertunities to kickstart my career in the field. If you are looking to get some work done see my contact page. Cheers!</p>
            </div>
        </div>
    )
}

export default About;