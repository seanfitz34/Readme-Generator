// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![License](https://img.shields.io/static/v1?label=license&message=${license}&color=success)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `https://choosealicense.com/licenses/${license}`;
  } else {
    return "#";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `License used for project:${renderLicenseLink(license)}`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.licenseType)}
  ## Table of Contents
* [Description](#description)
* [Installation Instructions](#installation)
* [How to contribute](#how-to-contribute)
* [To Test](#testing)
* [License](#licenseType)
## Description
${data.description}
## Installation Instructions
${data.installation}
## How to contribute
${data.contributing}
## To Test
${data.testInstructions}
## License
${renderLicenseSection(data.licenseType)}
## Questions
If you have any questions about my project my github is ${data.githubUserName}(https://github.com/${data.githubUserName}) or my email is ${data.email}

`;
}

module.exports = generateMarkdown;
