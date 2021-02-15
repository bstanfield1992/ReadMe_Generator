const fs = require("fs");
const inquire = require("inquire");

function promptUser() {
    return inquire.prompt ([
        {
            type: "input" ,
            name: "projectTitle" ,
            message: "What is the title of your Project?"
        },
        {
            type: "input" ,
            name: "Description" ,
            message: "Please write a brief description of your project: "
        },
        {
            type: "input" ,
            name: "installation" ,
            message: "Please describe the installation process if any: "
        },
        {
            type: "input" ,
            name: "usage" ,
            message: "Please describe what this project would be used for: "
        },
        {
            type: "list" ,
            name: "license" ,
            message: "Please choose the appropriate license for this project: " ,
            choices:[
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input" ,
            name: "contributions" ,
            message: "Please list those who contributed to this project: "
        },
        {
            type: "input" ,
            name: "tests" ,
            message: "Is there a test included?"
        },
        {
            type: "input" ,
            name: "questions" ,
            message: "What should I do if I have any questions?"
        },
        {
            type: "input" ,
            name: "user" ,
            message: "What is your GitHub username?"
        },
        {
            type: "input" ,
            name: "email" ,
            message: "What is your email?"
        }
    ])

    
}

function init() {
    
}