import React from "react";
import selfie from "./assets/placeholder.jpg"

import "./mysass.scss"

function About() {

    return (
        <div className="border transparent flex-row scroll">
            <div className="div-item center">
                <img src={selfie} />
            </div>

            <div className="div-item center">
                <p className="center"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi est sit amet facilisis magna. Odio facilisis mauris sit amet massa vitae. Diam vulputate ut pharetra sit amet aliquam id diam maecenas. Eget arcu dictum varius duis at consectetur. Senectus et netus et malesuada fames ac. Eu sem integer vitae justo. Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus. A condimentum vitae sapien pellentesque habitant.</p>
            </div>
        </div>
    )
}

export default About;