import React from "react";
import Project from "../Project"
import './mysass.scss'

function Gallery() {

    const projects = [
        {
            name: 'TOMODACHI',
            npm: 'devicon-npm-original-wordmark',
            nodeJS: 'devicon-nodejs-plain',
            html5: 'devicon-html5-plain',
            javascript: 'devicon-javascript-plain',
            description: 'A place to review movies with your friends!',
            link: 'https://tomodachi-sadboitay.herokuapp.com/'
        },
        {
            name: 'Flix-Fix',
            npm: 'devicon-npm-original-wordmark',
            nodeJS: 'devicon-nodejs-plain',
            html5: 'devicon-html5-plain',
            javascript: 'devicon-javascript-plain',
            description: 'A place to review movies with your friends!',
            link: 'https://github.com/michaelheinhold/group-project-2'
        },
        {
            name: 'Note Taker',
            npm: 'devicon-npm-original-wordmark',
            nodeJS: 'devicon-nodejs-plain',
            html5: 'devicon-html5-plain',
            javascript: 'devicon-javascript-plain',
            description: 'A simple web app that allows you to take notes',
            link: 'https://github.com/Johnson90cm/Note-Taker'
        },
        {
            name: 'e-commerce backend',
            npm: 'devicon-npm-original-wordmark',
            nodeJS: 'devicon-nodejs-plain',
            html5: 'devicon-html5-plain',
            javascript: 'devicon-javascript-plain',
            description: '',
            link: 'https://github.com/Johnson90cm/E-commerce-Back-End'
        },
        {
            name: 'Readme-Generator',
            npm: 'devicon-npm-original-wordmark',
            nodeJS: 'devicon-nodejs-plain',
            html5: 'devicon-html5-plain',
            javascript: 'devicon-javascript-plain',
            description: '',
            link: 'https://github.com/Johnson90cm/README-GEN'
        },
        {
            name: 'weather-dashboard',
            npm: 'devicon-npm-original-wordmark',
            nodeJS: 'devicon-nodejs-plain',
            html5: 'devicon-html5-plain',
            javascript: 'devicon-javascript-plain',
            description: '',
            link: 'https://github.com/Johnson90cm/weather-dashboard'
        },
        {
            name: 'deep-thoughts',
            npm: 'devicon-npm-original-wordmark',
            nodeJS: 'devicon-nodejs-plain',
            html5: 'devicon-html5-plain',
            javascript: 'devicon-javascript-plain',
            description: '',
            link: 'https://github.com/Johnson90cm/deep-thoughts'
        },
        {
            name: 'code-quiz',
            npm: 'devicon-npm-original-wordmark',
            nodeJS: 'devicon-nodejs-plain',
            html5: 'devicon-html5-plain',
            javascript: 'devicon-javascript-plain',
            description: '',
            link: 'https://github.com/Johnson90cm/Code-Quiz'
        },
        {
            name: 'MVC-tech-blog',
            npm: 'devicon-npm-original-wordmark',
            nodeJS: 'devicon-nodejs-plain',
            html5: 'devicon-html5-plain',
            javascript: 'devicon-javascript-plain',
            description: '',
            link: 'https://github.com/Johnson90cm/Model-View-Controller-MVC-Challenge-Tech-Blog'
        },
        {
            name: 'food-festival',
            npm: 'devicon-npm-original-wordmark',
            nodeJS: 'devicon-nodejs-plain',
            html5: 'devicon-html5-plain',
            javascript: 'devicon-javascript-plain',
            description: '',
            link: 'https://github.com/Johnson90cm/food-festival'
        },
        {
            name: 'password-generator',
            npm: 'devicon-npm-original-wordmark',
            nodeJS: 'devicon-nodejs-plain',
            html5: 'devicon-html5-plain',
            javascript: 'devicon-javascript-plain',
            description: '',
            link: 'https://github.com/Johnson90cm/password-generator'
        },
        {
            name: 'just-tech-news',
            npm: 'devicon-npm-original-wordmark',
            nodeJS: 'devicon-nodejs-plain',
            html5: 'devicon-html5-plain',
            javascript: 'devicon-javascript-plain',
            description: '',
            link: 'https://github.com/Johnson90cm/just-tech-news'
        },
        {
            name: 'team-profile-generator',
            npm: 'devicon-npm-original-wordmark',
            nodeJS: 'devicon-nodejs-plain',
            html5: 'devicon-html5-plain',
            javascript: 'devicon-javascript-plain',
            description: '',
            link: 'https://github.com/Johnson90cm/Team-Profile-Generator'
        },
        {
            name: 'workday-scheduler',
            npm: 'devicon-npm-original-wordmark',
            nodeJS: 'devicon-nodejs-plain',
            html5: 'devicon-html5-plain',
            javascript: 'devicon-javascript-plain',
            description: '',
            link: 'https://github.com/Johnson90cm/workday-scheduler'
        },
        {
            name: 'pizza-hunt',
            npm: 'devicon-npm-original-wordmark',
            nodeJS: 'devicon-nodejs-plain',
            html5: 'devicon-html5-plain',
            javascript: 'devicon-javascript-plain',
            description: '',
            link: 'https://github.com/Johnson90cm/pizza-hunt'
        },
        {
            name: 'u-develop-it',
            npm: 'devicon-npm-original-wordmark',
            nodeJS: 'devicon-nodejs-plain',
            html5: 'devicon-html5-plain',
            javascript: 'devicon-javascript-plain',
            description: '',
            link: 'https://github.com/Johnson90cm/u-develop-it'
        },
        {
            name: 'jest-another-rpg',
            npm: 'devicon-npm-original-wordmark',
            nodeJS: 'devicon-nodejs-plain',
            html5: 'devicon-html5-plain',
            javascript: 'devicon-javascript-plain',
            description: '',
            link: 'https://github.com/Johnson90cm/jest-another-rpg'
        },
        {
            name: 'taskmaster-pro',
            npm: 'devicon-npm-original-wordmark',
            nodeJS: 'devicon-nodejs-plain',
            html5: 'devicon-html5-plain',
            javascript: 'devicon-javascript-plain',
            description: '',
            link: 'https://github.com/Johnson90cm/taskmaster-pro'
        },
        {
            name: 'budget-tracker',
            npm: 'devicon-npm-original-wordmark',
            nodeJS: 'devicon-nodejs-plain',
            html5: 'devicon-html5-plain',
            javascript: 'devicon-javascript-plain',
            description: '',
            link: 'https://github.com/Johnson90cm/budget-tracker'
        },
        {
            name: 'portfolio-generator',
            npm: 'devicon-npm-original-wordmark',
            nodeJS: 'devicon-nodejs-plain',
            html5: 'devicon-html5-plain',
            javascript: 'devicon-javascript-plain',
            description: '',
            link: 'https://github.com/Johnson90cm/portfolio-generator'
        },
    ]

    const reactProjects = [
        {
            name: 'React Portfolio',
            npm: 'devicon-npm-original-wordmark',
            html5: 'devicon-html5-plain',
            react: 'devicon-react-original',
            javascript: 'devicon-javascript-plain',
            description: 'My professional react portfolio',
            link: 'https://github.com/Johnson90cm/react-portfolio'
        },
    ]



    return (


        <div className="border transparent flex-row scroll">

            {reactProjects.map(reactProject => {
                return (
                    <Project name={reactProject.name} description={reactProject.description} link={reactProject.link} technologies1={reactProject.react} technologies2={reactProject.javascript} technologies3={reactProject.html5} technologies5={reactProject.npm} />
                )
            })}

            {projects.map(project => {
                return (
                    <Project name={project.name} description={project.description} link= {project.link} technologies2={project.javascript} technologies3={project.html5} technologies4={project.nodeJS} technologies5={project.npm} />
                )
            })}

        </div>

    )
}

export default Gallery;