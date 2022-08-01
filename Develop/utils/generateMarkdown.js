// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return;
  }

  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    case 'CC0':
      return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'
    case 'Unlicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
    case 'ISC':
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return;
  }
  
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT'
    case 'CC0':
      return 'http://creativecommons.org/publicdomain/zero/1.0/'
    case 'Unlicense':
      return 'http://unlicense.org/'
    case 'ISC':
      return 'https://opensource.org/licenses/ISC'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return;
  }

  return `
  ## License
  
  This project is protected under a [${license}](${renderLicenseLink(license)}) License.
  `
}

var generateEmail = (email) => {
  return email ? `[${email}](mailto:${email})` : ''
}

function generateQuestionsSection(user, email) {
  return `
  [${user}'s GitHub](https://github.com/${user})<br>
  Questions and feedback may be emailed to ${generateEmail(email)}
  `
}

function generateContributeSection(canContribute, contribute) {
  if (!canContribute) {
    return
  }

  return `

  ## How to Contribute

  ${contribute}
  `
}

function addContributeToContents(canContribute) {
  if (!canContribute) {
    return
  }

  return `- [How to Contribute](#how)`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let { username, canContact, email, title, description, installInstructions, usage, license, tests,canContribute,contribute } = data;

  return `# ${title} ${renderLicenseBadge(license)}
  ## Description
  
  ${description}
  
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  ${addContributeToContents(canContribute)}
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${installInstructions}
  
  ## Usage
  
  ${usage}

  ${renderLicenseSection(license)}
  ${generateContributeSection(canContribute,contribute)}
  
  ## Tests
  
  ${tests}

  ## Questions
  ${generateQuestionsSection(username,email)}
`;
}

module.exports = generateMarkdown;
