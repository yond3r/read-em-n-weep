// function completeLicense(license) {
//     if (license === "Apache") {
//         return '![License: Apache](https://opensource.org/licenses/Apache-2.0)'
//     }
//     if (license === "MIT") {
//         return '![License: MIT](https://opensource.org/licenses/MIT)'
//     }
//     if (license === "Mozilla") {
//         return '[License: Mozilla](https://opensource.org/licenses/MPL-2.0)'
//     }
//     if (license === "None") {
//         return ''
//     }
// }

// function to generate the README 
// function generateMarkdown(data) {
//     return `# ${data.title}

// ##Table of Contents 
// 1. [Screenshots](#screenshots)
// 2. [Description](#description)
// 3. [Usage](#usage)
// 4. [Credits](#credits)
// 5. [Collaborators](#collaborators)
// 6. [Features](#features)
// 7. [License](#license)
// 8. [Contact](#contact)

// ## Screenshots
// - ${data.screenshots}

// ## Description 
// - ${data.description}

// ## Usage
// - ${data.usage}

// ## Credits
// - ${data.credits}

// ## Collaborators
// - ${data.potential}

// ## Features
// - ${data.features}

// ## License
// - ${completeLicense(data.license)}

// ## Contact
// - ${data.github}
// `;
// }

// because the command .export can only be ran in TypeScript files, I had to run this as a module.export
// module.export = generateMarkdown;