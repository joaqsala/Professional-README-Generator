// Included packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        message: 'Enter the title of your project.',
        name: 'title',
        validate: titleInput =>{
            if (titleInput){
                return true
            } else {
                console.log("Please enter a title for your README file.")
                return false
            };
        }
    },
    {
        type: 'input',
        message: 'Enter a short description explaining the what, why, and how of your project.',
        name: 'description',
        default: "This repository contains ..."
    },
    {
        type: 'input',
        message: 'Enter any installation instructions (step-by-step) needed for your project.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Povide instructions for the user experience and provide examples for use. Be sure to add screenshots after the README file is compiled.',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Choose a license for your project.',
        choices: ["None", "MIT License", "Apache License 2.0", 'BSD 3-Clause License', "GNU GPL v3.0", 'GNU GPL v2.0', 'BSD 2-Clause License', 'Mozilla Public license 2.0', 'The Unilicense', 'Internet Systems Consortium (ISC)'],
        name: 'license',
        default: "None"
    },
    {
        type: 'input',
        message: 'Enter any contribution guidelines for your project or use the default.',
        name: 'contribution',
        default: "Contributions are always welcomed. Please submit a pull request."
    },
    {
        type: 'input',
        message: 'Enter any tests for your projects (include examples on how to run them).',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Enter your GitHub username.',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Enter the email address you would like displayed to have other developers reach out to you.',
        name: 'email',
    },
])
.then((answers) => {
    const mdPageContent = generateMarkdown(answers);

    fs.writeFile('README.md', mdPageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
    );
})
.catch((error) => {
    if (error) {
    console.log(error)
    }});
}


// TODO: Create a function to initialize app
function init() {
    questions();
}

// Function call to initialize app
init();
