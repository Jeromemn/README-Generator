// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");
// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the project title?",
    },
    {
      type: "input",
      name: "description",
      message: "Please describe your project?",
    },
    {
      type: "input",
      name: "installation",
      message: "how is this installed?",
    },
    {
      type: "input",
      name: "usage",
      message: "How do you use this application?",
    },
    {
      type: "confirm",
      name: "confirmingImage",
      message: "Would you like to include a image?",
    },
    {
      type: "input",
      name: "imageSrc",
      message: "Enter the image path:",
      when: (answers) => answers.confirmingImage,
    },
    {
      type: "confirm",
      name: "secondImage",
      message: "Would you like to include a second image?",
    },
    {
      type: "input",
      name: "imageSrc2",
      message: "Enter the image path:",
      when: (answers) => answers.secondImage,
    },
    {
      type: "confirm",
      name: "confirmingVideo",
      message: "Would you like to include a video?",
    },
    {
      type: "input",
      name: "videoSrc",
      message: "Enter the image path:",
      when: (answers) => answers.confirmingVideo,
    },
    {
      type: "confirm",
      name: "confirmLicense",
      message: "Are any licenses needed?",
    },
    {
      type: "list",
      name: "license",
      message: "what license is needed?",
      choices: ["MIT", "Apache"],
      when: (answers) => answers.confirmLicense,
    },
    {
      type: "confirm",
      name: "confirmFeature",
      message: "Was there any features?",
    },
    {
      type: "input",
      name: "features",
      message: "Please list features:",
      when: (answers) => answers.confirmFeature,
    },
    {
      type: "input",
      name: "contribute",
      message: "how to contribute?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
    {
      type: "confirm",
      name: "confirmingtest",
      message: "Would you like to add testing instructions?",
    },
    {
      type: "input",
      name: "test",
      message: "Please supply the testing instructions:",
      when: (answers) => answers.confirmingtest,
    },
    {
      type: "input",
      name: "github",
      message: "What is your Github username?",
    },
  ])

  .then((answers) => {
    console.log(answers);
    const markdownPage = generateMarkdown(answers);
    fs.writeFile("README.md", markdownPage, (err) =>
      err ? console.log(err) : console.log("Successfully Created README!")
    );
  });

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
