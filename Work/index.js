// TODO: Include packages needed for this application 
const fs = require('fs')
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a short description of what your project entails.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Give a short description on how to install or get to the application.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Give a short description on how to use your application.'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Do you have any credits to make?'
    },
    {
        type: 'list',
        message: 'If your project needs a license, select one below or select none',
        name: 'licenses',
        choices: ['MIT', 'GNU GPLv3', 'None']
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquirer
        .prompt(questions)
        .then((data) => {
            const fileName = `${data.username.toLowerCase().split(' ').join('')}.md`
            fs.appendFile(fileName, JSON.stringify(data, null, '\t'), (err) => 
            err ? console.error(err) : console.log('Your README has been successfully created!')
            )
        })
}


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

writeToFile();