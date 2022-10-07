// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) return "";
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) return "";
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) return "";
  return `
		## License
		${renderLicenseBadge(license)}
		${renderLicenseLink(license)}
	`;
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
    # ${answers.title}
    ${renderLicenseSection(answers.license)}

    ## Description
    ${answers.description}
    
    ## Installation
    ${answers.installation}

    ## Usage
    ${answers.usage}
    
    ## Credits
    ${answers.credits}

    ## License 
    ${answers.license}

    ## Badges
    ${answers.badges}

    ## Features
    ${ansers.features}

    ## How to contribute
    ${answers.contribute}

    ## Tests
    ${answers.test}
`;
}
module.exports = generateMarkdown;
