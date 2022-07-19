const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utilities/generateMarkdown')

// console.log("howdy");

// Readme.md in the place of where a HTML file would be in the mini project??


//prompting the user
inquirer
    .prompt ([
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
    ])

// .then((answers) => {
//     generateMarkdown(answers);
// });


