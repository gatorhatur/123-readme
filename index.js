// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        question: 'What is your GitHub Username? (Required)',
        validate: userInput => {
            if (userInput) {
                return true;
            }
            else {
                console.log("You must enter a github username!");
            }
        }
    },
    {
        type: 'confirm',
        name: 'canContact',
        question: 'Can users contact you with questions or suggestions?',
        default: true
    },
    {
        type: 'input',
        name: 'email',
        question: 'Please provide your email address',
        when: ({ canContact }) => {
            if (canContact) {
                return true;
            }
            else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        question: 'What is the title of the project/repo? (Required)',
        validate: userInput => {
            if (userInput) {
                return true;
            }
            else {
                console.log("You must enter a project/repo title");
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
                console.log("You must provide a description for your project/repo.");
            }
        }
    },
    {
        type: 'input',
        name: 'installInstructions',
        question: 'Provide any installation instructions that a user would need to use your app.',
        default: 'There are no special installation instructions'
    },
    {
        type: 'input',
        name: 'usage',
        question: 'Provide any usage information',
        validate: userInput => userInput ? true : console.log("Please provide some usage information")
    },
    {
        type: 'list',
        name: 'license',
        question: 'What license is this project covered under?',
        choices: ['MIT','CC0','ISC','Unlicense',],
        default: 'MIT'
    },
    {
        type: 'input',
        name: 'tests',
        question: 'Please provide some example tests',
        default: 'Test examples coming soon!'
    },
    {
        type: 'confirm',
        name: 'canContribute',
        question: 'Would you like to provide contribution instructions?',
        default: false
    },
    {
        type: 'input',
        name: 'contribute',
        question: 'Provide constribution instructions',
        when: ({ canContribute }) => {
            return canContribute ? true : false
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, (err) => {
            if (err) {
                console.log(err);
                return reject;
            }
            return resolve;
        })
    })
    
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
        .then((data) => {
            writeToFile('./dist/readme.md', generateMarkdown(data));
        }
        //do things with the data
        
    )
}

// Function call to initialize app
init();
