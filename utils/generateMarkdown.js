// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }
const badges = {
    MIT: "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
    Apache: "![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)",
    GPL: "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)",
    BSD: "![License: BSD](https://img.shields.io/badge/License-BSD_3--Clause-orange.svg)"
};
return badges[license] || "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (!license) {
    return "";
}
const links = {
    MIT: "https://opensource.org/licenses/MIT",
    Apache: "https://opensource.org/licenses/Apache-2.0",
    GPL: "https://www.gnu.org/licenses/gpl-3.0",
    BSD: "https://opensource.org/licenses/BSD-3-Clause"
};
return links[license] || "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (!license) {
    return "";
}
const licenseLink = renderLicenseLink(license);
return `## License
This project is licensed under the [${license}](${licenseLink}) license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

${licenseBadge}

## Description

${data.description}

## Table of Contents
- [Installation](#installlation)
-[Usage](#usage)
-[License](#license)
-[Contributing](#contributing)
-[Tests](#tests)
-[Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${licenseSection}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions
Please contact me with any questions you may have at [${data.email}](mailto: ${data.email}) or visit my GitHub profile at [${data.github}](https://github.com/${data.github}).
`;
}

export default generateMarkdown;
