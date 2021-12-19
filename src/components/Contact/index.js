import React from "react";
import './mysass.scss'

function Contact() {

    return (
        <div>
            <div class="flip-container centered">
                <div class="flipper">
                    <div class="front"></div>
                    <div class="back">
                        <h1>Colton Johnson</h1>
                        <p>Full Stack Web Development</p>
                        <div class="font-a-icons">
                            <div class="icon-group">
                                <span class="bold"> ------------------------------------- </span><span class="contact"></span>
                                <div class="icon-group">
                                    <span class="bold">C: </span><a class="contact" target="_top">(801)584-9619</a>
                                </div>
                                <div class="icon-group">
                                    <span class="bold">E: </span><a class="contact" href="mailto:johncon90cm@gmail.com" target="_top">johnson90.cm@gmail.com</a>
                                </div>

                            </div>
                        </div>
                        <a class="icon-box" href="https://www.instagram.com/colton_mj/" target="_blank"></a>
                        <a class="icon-box" href="https://github.com/Johnson90cm" target="_blank"><i class="devicon-github-original"></i></a>
                        <a class="icon-box" href="https://www.linkedin.com/in/colton-johnson-248118163/" target="_blank"><i class="devicon-linkedin-plain"></i></a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact;