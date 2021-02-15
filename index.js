// TODO: Include packages needed for this application

const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./util/generateReadme")
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
function promptUser(){
 return inquirer.prompt ([
    {
        type: "input" ,
        name: "projectTitle" ,
        message: "What is the title of your Project?"
    },
    {
        type: "input" ,
        name: "description" ,
        message: "Please write a brief description of your project: "
    },
    {
        type: "input" ,
        name: "installation" ,
        message: "Please list what will need to be installed from npm: "
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
]);
}


// TODO: Create a function to write README file
// function writeToFile(filename, data) {
//     generateReadme(data);
// }

// TODO: Create a function to initialize app
async function init() {
    try {
        // Ask user questions and generate responses
        const answers = await promptUser();
        const generateContent = generateReadme(answers);
        // Write new README.md to dist directory
        await writeFileAsync('./dist/README.md', generateContent);
        console.log('wrote to README.md');
    }   catch(err) {
        console.log(err);
    }
}

// Function call to initialize app
init();
