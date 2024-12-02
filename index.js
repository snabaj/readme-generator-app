// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';
import { type } from 'os';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: input => input ? true : 'Title is required!'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project.',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide guidelines for contributing to your project.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide examples on how to run tests.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        err ? console.error(err) : console.log('Success! README2.md file has been created!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        const markdown = generateMarkdown(answers);
        writeToFile('README2.md', markdown);
    })
    .catch(error => {
        console.error(error)
    });
}

// Function call to initialize app
init();
