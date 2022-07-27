// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        question: 'What is the title of the project/repo? (Required)',
        validate: userInput => {
            if (userInput) {
                return true;
            }
            else {
                console.log("Please enter a name!");
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        question: 'Provide a description of the project. (Required)',
        validate: userInput => {
            if (userInput) {
                return true;
            }
            else {
                console.log("Please enter a name!");
            }
        }
    },
    {
        type: 'input',
        name: 'installInstructions',
        question: 'Provide any installation instructions that a user would need to use your app. (Required)',
    },
    {
        type: 'input',
        name: 'usage',
        question: 'Provide any usage information',
    },
    {
        type: 'checkbox',
        name: 'license',
        question: 'What license is this project covered under?',
        choices: ['MIT',],
        default: 'MIT'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
        .then(
        //do things with the data
    )
}

// Function call to initialize app
init();
