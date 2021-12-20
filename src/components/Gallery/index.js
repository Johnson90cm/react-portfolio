import React from "react";
import Project from "../Project"
import './mysass.scss'

function Gallery() {

    const projects = [
        {
            name: 'Flix-Fix',
            npm: 'devicon-npm-original-wordmark',
            nodeJS: 'devicon-nodejs-plain',
            html5: 'devicon-html5-plain',
            javascript: 'devicon-javascript-plain',
            description: 'A place to review movies with your friends!',
        },
        {
            name: 'Flix-Fix',
            npm: 'devicon-npm-original-wordmark',
            nodeJS: 'devicon-nodejs-plain',
            html5: 'devicon-html5-plain',
            javascript: 'devicon-javascript-plain',
            description: 'A place to review movies with your friends!',
        },
        {
            name: 'Flix-Fix',
            npm: 'devicon-npm-original-wordmark',
            nodeJS: 'devicon-nodejs-plain',
            html5: 'devicon-html5-plain',
            javascript: 'devicon-javascript-plain',
            description: 'A place to review movies with your friends!',
        },
        {
            name: 'Flix-Fix',
            npm: 'devicon-npm-original-wordmark',
            nodeJS: 'devicon-nodejs-plain',
            html5: 'devicon-html5-plain',
            javascript: 'devicon-javascript-plain',
            description: 'A place to review movies with your friends!',
        },
        {
            name: 'Flix-Fix',
            npm: 'devicon-npm-original-wordmark',
            nodeJS: 'devicon-nodejs-plain',
            html5: 'devicon-html5-plain',
            javascript: 'devicon-javascript-plain',
            description: 'A place to review movies with your friends!',
        },
        {
            name: 'Flix-Fix',
            npm: 'devicon-npm-original-wordmark',
            nodeJS: 'devicon-nodejs-plain',
            html5: 'devicon-html5-plain',
            javascript: 'devicon-javascript-plain',
            description: 'A place to review movies with your friends!',
        },
        {
            name: 'Flix-Fix',
            npm: 'devicon-npm-original-wordmark',
            nodeJS: 'devicon-nodejs-plain',
            html5: 'devicon-html5-plain',
            javascript: 'devicon-javascript-plain',
            description: 'A place to review movies with your friends!',
        },
        {
            name: 'Flix-Fix',
            npm: 'devicon-npm-original-wordmark',
            nodeJS: 'devicon-nodejs-plain',
            html5: 'devicon-html5-plain',
            javascript: 'devicon-javascript-plain',
            description: 'A place to review movies with your friends!',
        },
    ]

    const reactProjects = [
        {
            name: 'React Portfolio',
            html5: 'devicon-html5-plain',
            react: 'devicon-react-original',
            javascript: 'devicon-javascript-plain',
            description: 'My professional react portfolio'
        },
    ]



    return (


        <div className="border transparent flex-row scroll">

            {reactProjects.map(reactProject => {
                return (
                    <Project name={reactProject.name} description={reactProject.description} technologies1={reactProject.react} technologies2={reactProject.javascript} technologies3={reactProject.html5} />
                )
            })}

            {projects.map(project => {
                return (
                    <Project name={project.name} description={project.description} technologies2={project.javascript} technologies3={project.html5} technologies4={project.nodeJS} technologies5={project.npm} />
                )
            })}

        </div>

    )
}

export default Gallery;