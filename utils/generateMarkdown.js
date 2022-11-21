// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // if statement
  // return a license
  // `![License](https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // if statement
  //                   # goes to the section
  // return `[License](#license)`
  // return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // if statement
  // return `## license`
  // $(license)
}

// RenderGitHub function - responsible for linking github user input + link
// return

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## ${data.description}
  ## Table of contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Features](#features)
  * [Contribution](#contribution)
  * [Test](#test)
  ## Usage
  ${data.usage}
  ## Credits
  ${data.credits}
  ## License
  ${data.license}
  ## Features
  ${data.features}
  ## Contribution 
  ${data.contribution}
  ## Tests
  ${data.test}
  
`;
  // Title
  // Description
  // Table of contents
  // installation
  // usage
  //     use the spread operator when adding them using \n to seperate

  // credits
  // License
  // badges
  // futures
  // how to contribute
  // tests
}
// call renderLicenseBadge function inside template literal
// Build table of contents and link them using * to create a list; and # to target each section
//

module.exports = generateMarkdown;
