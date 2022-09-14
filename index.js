// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What the name of your Project?",
       
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project",
       
    },
    {
        type: "input",
        name: "installation",
        message: "How do you install it?",
      
    },
    {
        type: "input",
        name: "usageInfo",
        message: "What is your app for?",
    },
    {
        type: "input",
        name: "contributing",
        message: "How can someone contribute?",
    },
    {
        type: "input",
        name: "testInstructions",
        message: "How can someone test your application?",
    },
    {
        type: "confirm",
        name: "license",
        message: "Would you like to add a license?",
     
    },
    {
        type: "licenseList",
        name: "licenseType",
        message: "What is your project's description?",
        choices: ["mit", "Apache-2.0", "BSD", "Creative Commons"],
        when: ({ license }) => {
            if (license) {
                return true;
            } else {
                return false;
            }
        },
    },
    {
        type: "input",
        name: "githubUserName",
        message: "What is your Github User Name?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    },
];
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("Finsihed!");
    });

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        const returnedAnswers = generateMarkdown(answers);
        writeToFile("README.md", returnedAnswers);
    });

}

// Function call to initialize app
init();
