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
        type: 'list',
        message: 'Choose a license for your project.',
        choices: ["None", "MIT License", "Apache License 2.0", 'BSD 3-Clause License', "GNU GPL v3.0", 'GNU GPL v2.0', 'BSD 2-Clause License', 'Mozilla Public License 2.0', 'The Unilicense', 'Internet Systems Consortium (ISC)'],
        name: 'license',
        default: "None"
    },
    // {
    //     type: 'input',
    //     message: 'Enter any contribution guidelines for your project',
    //     name: 'contribution',
    //     default: "N/A"
    // },
    // {
    //     type: 'input',
    //     message: 'Enter any test instructions for your project.',
    //     name: 'tests',
    //     default: "N/a"
    // },
    // {
    //     type: 'input',
    //     message: 'Enter your GitHub usernamer.',
    //     name: 'username',
    // },
    // {
    //     type: 'input',
    //     message: 'Enter your email address.',
    //     name: 'email',
    // },
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
