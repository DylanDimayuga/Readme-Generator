function generateMarkdown(data) {

  let licenseBadge = ''

  switch(data.license) {
    case 'MIT': licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
    break;
  
    case 'GNU': licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]'
    break;
  
    default: ''
  }
  
  let licenseLink = ''

  switch(data.license) {
  case 'MIT': licenseLink = 'https://opensource.org/licenses/MIT'
  break;

  case 'GNU': licenseLInk = 'https://www.gnu.org/licenses/gpl-3.0.en.html'
  break;

  default: ''
}

  return `
  ${licenseBadge}
  
  # ${data.title}

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
  This page is covered by an ${data.license} license. Follow the link to the license page.
  ${licenseLink}
  

  ## Questions
    Github: (https://github.com/${data.username})
    Email: ${data.email}
`;
}

module.exports = generateMarkdown;
