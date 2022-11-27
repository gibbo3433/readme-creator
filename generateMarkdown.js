// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if ( license !== "none" ) {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)` 
  } 
  return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if ( license !== "none ") {
    return `(https://opensource.org/licenses/Apache-2.0)`
  }
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if ( license !== "none ") {
    return ` This project is licensed under: ${license} `
  }
  return "" 
}

// This function generates a markdown for the ReadMe.md file in the assests folder
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Title](#title)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}
  
  ## License

  ${renderLicenseSection(data.license)}

  Here is the license link for ${data.license} ${renderLicenseLink(data.license)}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  If you have questions you want to ask about this project, please contact ${data.username}(https://github.com/${data.username})</br>
  Or, you can send an email to ${data.email}

`;
}

module.exports = generateMarkdown;
