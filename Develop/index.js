// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { default: Choices } = require('inquirer/lib/objects/choices');
// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the project tile ?'
        },
         {
            type: 'input',
            name: 'description',
            message: 'Please describe your project?'
        },
        {
            type: 'input',
            name: 'Table of contents',
            message: 'what goes in the table of contents?'
        },
        
        {
            type: 'input',
            name: 'installation',
            message: 'how is this installed?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use this application?'
        },
        {
            type: 'input',
            name: 'cedits',
            message: 'What type of license does your project need?'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'what license is needed?'
            Choices: ["MIT", `Apache`, "none"]
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'how to contribute?'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'What is your email?'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'What is your Github?'
        },
])
.then((answers) => {
    const markdownPage = markdown(answers);
    fs.writeFile("README.md", markdownPage, (err) => 
    err ? console.log(err) : console.log('Successfully Created README!')
    );
});


// // function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();



