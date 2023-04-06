// Included packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        message: 'Enter the title of your project.',
        name: 'title',
        default: "Title"
    },
    {
        type: 'input',
        message: 'Enter a description for your project.',
        name: 'description',
        default: "My project ..."
    },
    {
        type: 'input',
        message: 'Enter any installation instructions needed for your project, if any.',
        name: 'installation',
        default: "N/A"
    },
    {
        type: 'input',
        message: 'Enter usage information for your project.',
        name: 'usage',
        default: "This project is ..."
    },
    {
        type: 'input',
        message: 'Enter any contribution guidelines for your project',
        name: 'contribution',
        default: "N/A"
    },
    {
        type: 'input',
        message: 'Enter any test instructions for your project.',
        name: 'test',
        default: "N/a"
    },
    {
        type: 'list',
        message: 'Choose a license for your project.',
        choices: ["None", "Apache License 2.0", "GNU General Public License v3.0", "MIT License", 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unilicense'],
        name: 'license',
        default: "None"
    },
    {
        type: 'input',
        message: 'Enter your GitHub usernamer.',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Enter your email address.',
        name: 'email',
    },
]);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    questions()
}

// Function call to initialize app
init();
