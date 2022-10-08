// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";

    case "Apache":
      return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";

    default:
      return "N/A";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "[License: MIT](https://opensource.org/licenses/MIT)";

    case "Apache":
      return "[License](https://opensource.org/licenses/Apache-2.0)";

    default:
      return "N/A";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log(license);
  if (!license) return "";
  return `
## License
${renderLicenseBadge(license)}

${renderLicenseLink(license)}
	`;
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
# ${answers.title}
${renderLicenseSection(answers.license)}

## Table of contents
* [Title](#title) 
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribute](#contribute)
* [Questions](#questions)
* [Github](#github)

## Description
${answers.description}
    
## Installation
${answers.installation}

## Usage
${answers.usage}

${answers.imageSrc ? `![image](${answers.imageSrc})` : ""}

${answers.imageSrc2 ? `![image](${answers.imageSrc2})` : ""}

${answers.videoSrc ? `[Watch Builing README](${answers.videoSrc})` : ""}
    
## ${answers.features ? 'Features' : ""}
${answers.features ? `${answers.features}` : ""}

## How to contribute
${answers.contribute}

## ${answers.features ? `Tests` : ""}
${answers.test ? `${answers.test}` : ""}

## Questions
For any questions regarding this applications, such as how to use it or how to contribute. You may contact through this Github account.

contact Info:
Github: https://github.com/${answers.github}
Email: [${answers.email}](mailto:${answers.email})
`;
}

module.exports = generateMarkdown;
