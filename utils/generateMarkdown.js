// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // if statement
  // return a license
  // `![License](https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>)`
  console.log(license);
  let licenseBadge = "";
  if (license === "MIT License") {
    licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "GPLv2") {
    licenseBadge =
      "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
  } else if (license === "Apache") {
    licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GPLv3") {
    licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "BSD 3-clause") {
    licenseBadge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  } else {
    licenseBadge = "";
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   // if statement
//   //                   # goes to the section
//   // return `[License](#license)`
//   // return ""
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   // if statement
//   // return `## license`
//   // $(license)
// }

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
  ${renderLicenseBadge(data.license[0])}
  ## Features
  ${data.features}
  ## Contribution 
  ${data.contribution}
  ## Tests
  ${data.test}
  
`;

}


module.exports = generateMarkdown;
