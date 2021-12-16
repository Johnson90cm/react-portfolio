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
                                <span class="bold">C: </span><span class="contact">(801) 584-9619</span>
                                <div class="icon-group">
                                    <span class="bold">E: </span><a class="contact" href="mailto:hello@petrusrex.com" target="_top">johnson90.cm@gmail.com</a>
                                </div>
                                <div class="icon-group">
                                    <a class="contact" href="http://www.petrusrex.com" target="_blank">github: johnson90cm</a>
                                </div>
                            </div>
                        </div>
                        <a class="icon-box" href="https://www.instagram.com/colton_mj/" target="_blank"><i class=""></i></a>
                        <a class="icon-box" href="https://github.com/Johnson90cm" target="_blank"><i class=""></i></a>
                        <a class="icon-box" href="https://www.linkedin.com/in/colton-johnson-248118163/" target="_blank"><i class=""></i></a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact;