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
                                <span class="bold">T: </span><span class="contact">801-584-9619</span>
                                <div class="icon-group">
                                    <span class="bold">E: </span><a class="contact" href="mailto:hello@petrusrex.com" target="_top">johnson90.cm@gmail.com</a>
                                </div>
                                <div class="icon-group">
                                    <a class="contact" href="http://www.petrusrex.com" target="_blank">github: johnson90cm</a>
                                </div>
                            </div>
                        </div>
                        <a class="icon-box" href="https://www.facebook.com/xpetrus.rex" target="_blank"><i class="fa fa-facebook"></i></a>
                        <a class="icon-box" href="https://twitter.com/Gothburz" target="_blank"><i class="fa fa-twitter"></i></a>
                        <a class="icon-box" href="https://plus.google.com/u/0/+PetrusRex/" target="_blank"><i class="fa fa-google-plus"></i></a>
                        <a class="icon-box" href="https://www.linkedin.com/in/xpetrus" target="_blank"><i class="fa fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact;