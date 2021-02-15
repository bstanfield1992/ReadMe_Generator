// generateReadme function populating the README.md
function generateReadme(answers) {
    return `
<h1 align="center">${answers.projectTitle}</h1>
  
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />
## Description
${answers.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${answers.installation}
## Usage
${answers.usage}
## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />
This application is covered by the ${answers.license} license. 
## Contributions
${answers.contributions}
## Tests
${answers.tests}
## Questions
${answers.questions}<br />
<br />
GitHub: [${answers.user}](https://github.com/${answers.user})<br />
<br />
Email: ${answers.email}<br /><br />
    `;
  }
  
  module.exports = generateReadme;