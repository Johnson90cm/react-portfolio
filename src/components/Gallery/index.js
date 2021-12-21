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
            name: 'Note Taker',
            npm: 'devicon-npm-original-wordmark',
            nodeJS: 'devicon-nodejs-plain',
            html5: 'devicon-html5-plain',
            javascript: 'devicon-javascript-plain',
            description: 'A place to review movies with your friends!',
        },
        {
            name: 'e-commerce backend',
            npm: 'devicon-npm-original-wordmark',
            nodeJS: 'devicon-nodejs-plain',
            html5: 'devicon-html5-plain',
            javascript: 'devicon-javascript-plain',
            description: 'A place to review movies with your friends!',
        },
        {
            name: 'Readme-Generator',
            npm: 'devicon-npm-original-wordmark',
            nodeJS: 'devicon-nodejs-plain',
            html5: 'devicon-html5-plain',
            javascript: 'devicon-javascript-plain',
            description: 'A place to review movies with your friends!',
        },
        {
            name: 'weather-dashboard',
            npm: 'devicon-npm-original-wordmark',
            nodeJS: 'devicon-nodejs-plain',
            html5: 'devicon-html5-plain',
            javascript: 'devicon-javascript-plain',
            description: 'A place to review movies with your friends!',
        },
        {
            name: 'deep-thoughts',
            npm: 'devicon-npm-original-wordmark',
            nodeJS: 'devicon-nodejs-plain',
            html5: 'devicon-html5-plain',
            javascript: 'devicon-javascript-plain',
            description: 'A place to review movies with your friends!',
        },
        {
            name: 'code-quiz',
            npm: 'devicon-npm-original-wordmark',
            nodeJS: 'devicon-nodejs-plain',
            html5: 'devicon-html5-plain',
            javascript: 'devicon-javascript-plain',
            description: 'A place to review movies with your friends!',
        },
        {
            name: 'MVC-tech-blog',
            npm: 'devicon-npm-original-wordmark',
            nodeJS: 'devicon-nodejs-plain',
            html5: 'devicon-html5-plain',
            javascript: 'devicon-javascript-plain',
            description: 'A place to review movies with your friends!',
        },
        {
            name: 'food-festival',
            npm: 'devicon-npm-original-wordmark',
            nodeJS: 'devicon-nodejs-plain',
            html5: 'devicon-html5-plain',
            javascript: 'devicon-javascript-plain',
            description: 'A place to review movies with your friends!',
        },
        {
            name: 'password-generator',
            npm: 'devicon-npm-original-wordmark',
            nodeJS: 'devicon-nodejs-plain',
            html5: 'devicon-html5-plain',
            javascript: 'devicon-javascript-plain',
            description: 'A place to review movies with your friends!',
        },
        {
            name: 'just-tech-news',
            npm: 'devicon-npm-original-wordmark',
            nodeJS: 'devicon-nodejs-plain',
            html5: 'devicon-html5-plain',
            javascript: 'devicon-javascript-plain',
            description: 'A place to review movies with your friends!',
        },
        {
            name: 'team-profile-generator',
            npm: 'devicon-npm-original-wordmark',
            nodeJS: 'devicon-nodejs-plain',
            html5: 'devicon-html5-plain',
            javascript: 'devicon-javascript-plain',
            description: 'A place to review movies with your friends!',
        },
        {
            name: 'workday-scheduler',
            npm: 'devicon-npm-original-wordmark',
            nodeJS: 'devicon-nodejs-plain',
            html5: 'devicon-html5-plain',
            javascript: 'devicon-javascript-plain',
            description: 'A place to review movies with your friends!',
        },
        {
            name: 'pizza-hunt',
            npm: 'devicon-npm-original-wordmark',
            nodeJS: 'devicon-nodejs-plain',
            html5: 'devicon-html5-plain',
            javascript: 'devicon-javascript-plain',
            description: 'A place to review movies with your friends!',
        },
        {
            name: 'u-develop-it',
            npm: 'devicon-npm-original-wordmark',
            nodeJS: 'devicon-nodejs-plain',
            html5: 'devicon-html5-plain',
            javascript: 'devicon-javascript-plain',
            description: 'A place to review movies with your friends!',
        },
        {
            name: 'jest-another-rpg',
            npm: 'devicon-npm-original-wordmark',
            nodeJS: 'devicon-nodejs-plain',
            html5: 'devicon-html5-plain',
            javascript: 'devicon-javascript-plain',
            description: 'A place to review movies with your friends!',
        },
        {
            name: 'taskmaster-pro',
            npm: 'devicon-npm-original-wordmark',
            nodeJS: 'devicon-nodejs-plain',
            html5: 'devicon-html5-plain',
            javascript: 'devicon-javascript-plain',
            description: 'A place to review movies with your friends!',
        },
        {
            name: 'budget-tracker',
            npm: 'devicon-npm-original-wordmark',
            nodeJS: 'devicon-nodejs-plain',
            html5: 'devicon-html5-plain',
            javascript: 'devicon-javascript-plain',
            description: 'A place to review movies with your friends!',
        },
        {
            name: 'portfolio-generator',
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
            npm: 'devicon-npm-original-wordmark',
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
                    <Project name={reactProject.name} description={reactProject.description} technologies1={reactProject.react} technologies2={reactProject.javascript} technologies3={reactProject.html5} technologies5={reactProject.npm} />
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