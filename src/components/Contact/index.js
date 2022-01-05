import React from "react";
import './mysass.scss'
import resumeFile from './assets/resume.pdf'
import resume from './assets/resume.png'
import { Document } from 'react-pdf'

function Contact() {

    return (
        <div class="transparent border">
            <div class="flip-container centered">
                <div class="flipper">
                    <div class="front"></div>
                    <div class="back">
                        <h1>Colton Johnson</h1>
                        <p>Full Stack Web Development</p>
                        <div class="font-a-icons">
                            <div class="icon-group">

                                <span class="bold"> </span><span class="contact"></span>
                                <div class="icon-group">
                                    <span class="bold">C: </span><a class="contact" target="_top">(801)584-9619</a>
                                </div>
                                <div class="icon-group">
                                    <span class="bold">E: </span><a class="contact" href="mailto:johncon90cm@gmail.com" target="_top">johnson90.cm@gmail.com</a>
                                </div>

                            </div>
                        </div>
                        <a class="icon-box" aria-label="GitHub" data-balloon-pos="up" href="https://github.com/Johnson90cm" target="_blank"><i class="devicon-github-original"></i></a>
                        <a class="icon-box" aria-label="LinkedIn" data-balloon-pos="up" href="https://www.linkedin.com/in/colton-johnson-248118163/" target="_blank"><i class="devicon-linkedin-plain"></i></a>
                        <a class="icon-box" aria-label="Resume" data-balloon-pos="up" href="./assets/resume.pdf" target="_blank" download><img src={resume} /></a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact;