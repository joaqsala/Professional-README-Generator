// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case "MIT License":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/license/mit/)";
    case "Apache License 2.0":
      return "[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/license/apache-2-0/)";
    case "BSD 3-Clause License":
      return "[![License: BSD-3](https://img.shields.io/badge/License-BSD3_clause-brightgreen.svg)](https://spdx.org/licenses/BSD-3-Clause.html)";
    case "GNU GPL v3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "GNU GPL v2.0":
      return "[![License: GPL v2](https://img.shields.io/badge/License-GPLv2-blue.svg)](https://www.gnu.org/licenses/gpl-2.0)";
    case "BSD 2-Clause License":
      return "[![License: BSD-2](https://img.shields.io/badge/License-BSD2_clause-brightgreen.svg)](https://spdx.org/licenses/BSD-2-Clause-Patent.html)";
    case "Mozilla Public license 2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://www.mozilla.org/en-US/MPL/2.0/)";
    case "The Unilicense":
      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
    case "Internet Systems Consortium (ISC)":
      return "[![License](https://img.shields.io/badge/License-ISC-yellow.svg)](https://opensource.org/license/isc-license-txt/)";
    case "None":
      return "";
    default:
      return "";
  };
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT License":
      return "https://opensource.org/license/mit/";
    case "Apache License 2.0":
      return "https://opensource.org/license/apache-2-0/";
    case "BSD 3-Clause License":
      return "https://spdx.org/licenses/BSD-3-Clause.html";
    case "GNU GPL v3.0":
      return "https://www.gnu.org/licenses/gpl-3.0";
    case "GNU GPL v2.0":
      return "https://www.gnu.org/licenses/gpl-2.0";
    case "BSD 2-Clause License":
      return "https://spdx.org/licenses/BSD-2-Clause-Patent.html";
    case "Mozilla Public license 2.0":
      return "https://www.mozilla.org/en-US/MPL/2.0/";
    case "The Unilicense":
      return "http://unlicense.org/";
    case "Internet Systems Consortium (ISC)":
      return "https://opensource.org/license/isc-license-txt/";
    case "None":
      return "";
    default:
      return "";
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None"){
  return `This project is covered under the ${license}.\n 
  ${renderLicenseLink(license)}`
  } else return ""
}

// Function to generate markdown for README
function generateMarkdown({title, description, installation, usage, license, contribution, tests, username, email}) {

  return `
  ${renderLicenseBadge(license)}

  # ${title}

  ## Description
  
  ${description}

  ## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contribution)
- [Tests](#tests)
- [Questions](#questions)


## Installation

${installation}

## Usage 

${usage}


## License

${renderLicenseSection(license)}

## Contribution

${contribution}

## Tests

${tests}

## Questions

For any questions, please feel free to reach out. 

Github username: https://github.com/${username}

Email: ${email}
`;
}

module.exports = generateMarkdown;
