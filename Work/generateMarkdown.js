// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) { // data is an object
    /* {
        projectName: "React-Calculator",
        description: "A simple calculator app made with react",
        installation: "you are on your own",

    }
    
    */
  return `# ${data.projectName}

  ## Description
    ${data.description}
  ## Table Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  ## Credits
  ${data.credits}
  ## License
${renderLicenseBadge(data.license)}
`;
}

module.exports = generateMarkdown;
