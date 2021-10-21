const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./generateMarkdown')

const questions = () => {
    return inquirer.prompt([
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
        name: 'license',
        message: 'If your project needs a license, select one below or select none',
        choices: ['MIT', 'GNU', 'N/A']
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
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    questions(data)
        .then((data) => {
            const fileName = `${data.username.toLowerCase().split(' ').join('')}.md`
            fs.appendFile(fileName, generateMarkdown(data), (err) => {
                if (err) {
                    console.log(err)
                } else
                console.log('Readme successfully created')
            })
        })
}

writeToFile();