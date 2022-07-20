const inquirer = require('inquirer');
const fs = require('fs');
// const generateMarkdown = require('./utilities/generateMarkdown')

// const writeFileAsync = util.promisify(fs.writeFile);

//prompting the user
function promptUser(){
    return inquirer.prompt ([
        {
            type: "input",
            message: "What is the intended title of your project(s)?",
            name: "title"
        },
        {
            type: "input",
            message: "please place a screenshot of the final application, using the following commands: ![alt text](relative-file-path/images/image.png) OR ![alt text](applicable URL)",
            name: "screenshots"
        },
        {
            type: "input",
            message: "Please provide a detailed description of your project below",
            name: "description"
        },
        {
            type: "input",
            message: "Please provide an installation guide for how to use your intended products.",
            name: "usage"
        },
        {
            type: "input",
            message: "Please provide any amplifying information, if any guides, videos, or other resources were used.",
            name: "credits"
        },
        {
            type: "confirm",
            message: "do you have any fellow collaborators you'd like to add?",
            name: "potential"
        },
        //     when: ({ confirmCollab }) => {
        //         if (confirmCollab) {
        //             return true;
        //         } else {
        //             return false;
        //             console.log("Thank you!")
        //         }
        // },
        {
            type: "confirm",
            message: "Would you like to add features? If so, add them here.",
            name: "features"
        },
        {
            type: "list",
            message: "Would you like a license? Please select from below",
            choices: ["None", "MIT", "Mozilla", "Apache"],
            name: "license"
        },    
        {
            name: "input",
            message: "Any questions? Please reach out me @ my github link, OR add your own, so others can ask questions!",
            name: "github"
        }
    ]);
}
// .then((answers) => {
//     generateMarkdown(answers);
// });

// .then((ans) => {
//     console.log(ans);
//     const data = generateReadMe(ans);
//     fs.writeFile(`./output/${ans.title}README.md`, data,
//     (err) => err ? console.log(err) : console.log ("We did it (-:")
//     );
// }) 

function generateMarkdown(data) {
        fs.writeFile(`./output/README.md`, 
`## ${data.title}
    
 ##Table of Contents 
 1. [Screenshots](#screenshots)
 2. [Description](#description)
 3. [Usage](#usage)
 4. [Credits](#credits)
 5. [Collaborators](#collaborators)
 6. [Features](#features)
 7. [License](#license)
 8. [Contact](#contact)
 
 ## Screenshots
 - ${data.screenshots}
 
 ## Description 
 - ${data.description}
 
 ## Usage
 - ${data.usage}
 
 ## Credits
 - ${data.credits}
 
 ## Collaborators
 - ${data.potential}
 
 ## Features
 - ${data.features}
 
 ## License
 - ${completeLicense(data.license)}
 
 ## Contact
 - ${data.github}
 `,
    (err) => err ? console.log(err) : console.log("yay (-:"))
    }

function completeLicense(license) {
    if (license === "Apache") {
        return '![License: Apache](https://opensource.org/licenses/Apache-2.0)'
    }
    if (license === "MIT") {
        return '![License: MIT](https://opensource.org/licenses/MIT)'
    }
    if (license === "Mozilla") {
        return '[License: Mozilla](https://opensource.org/licenses/MPL-2.0)'
    }
    if (license === "None") {
        return ''
    }
}

async function init() {
    try {
        const answers = await promptUser();
        const generateContent = generateMarkdown(answers);

        // await writeFileAsync('./output/README.md', generateContent);
            console.log("lo hicimos (-:");
        
     } catch(err) {
                console.log(err);
            }
    }

    init();