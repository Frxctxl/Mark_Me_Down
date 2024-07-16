const { default: inquirer } = require('inquirer');

const fs = require('fs').promises;

const fields = [
  {
    name: 'title',
    message: 'Please enter a Title'
  },

  {
    name: 'description',
    message: 'Please enter a Description'
  },

  {
    name: 'install',
    message: 'Please enter the install process'
  },

  {
    name: 'usage',
    message: 'Please enter the usage information'
  },

  {
    name: 'conts',
    message: 'Please enter any Contributers'
  },

  {
    name: 'licenses',
    message: 'Which license do you own?',
    type: 'list',
    choices: [
      'The MIT License',
      'Apache License 2.0',
      'GNU GPL v3',
      'Mozilla Public License 2.0',
      'BSD 3-Clause License'
    ]
  },

  {
    name: 'test',
    message: 'Please enter the testing directions'
  },

  {
    name: 'git',
    message: 'Please enter your GitHub username'
  },

  {
    name: 'mail',
    message: 'Please enter your email address'
  }
]

function acceptInfo() {
  inquirer.prompt(fields)
    .then(fieldObj => writeMD(fieldObj))
};

function fetchLicense(license) {
  switch (license) {
    case 'The MIT License':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    case 'Apache License 2.0':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    case 'GNU GPL v3':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    case 'Mozilla Public License 2.0':
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    case 'BSD 3-Clause License':
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  }
}

function writeMD(vals) {
  const license = fetchLicense(vals.licenses);
  const md = `
# ${vals.title}

${license}

## Description
  ${vals.description}

## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributers](#contributers)
  - [Testing Information](#Testing)
  - [Contact Information](#contact)

## Installation
  ${vals.install}

## Usage
  ${vals.usage}

## Contributers
  ${vals.conts}

## Testing
  ${vals.test}

## Contact
  GitHub: ${vals.git}
  Email: ${vals.mail}
`;
  return fs.writeFile('./README.md', md);
}

function init() {
  console.log(`
---------------------------
  Welcome To Mark Me Down!
---------------------------
`);
  acceptInfo()
};

init();
