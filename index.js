// import the modules from utils
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkDown = require("./utils/generateMarkdown");

// Created an array of questions for user input
const questions = [
  {
    //  type - defines the type of input it will be
    type: "input",
    // message - refers to the message being shown in command line
    message: "Please provide a project title: ",
    // name - refers to the name (key) of this object
    name: "title",
  },
  {
    type: "input",
    message:
      "Provide a project description: \n (What did you build? Why? and How?) \n (What was your motivation? What problem did you solve? What did you learn?)",
    name: "description",
  },
  {
    type: "input",
    message: "Provide any installation instructions: \n (Step-by-step description of how to get the development environment running.) ",
    name: "installation",
  },
  {
    type: "input",
    message: "Include screenshots: \n(Use the relative filepath in your repo)",
    name: "usage",
  },
  {
    type: "input",
    message: "List yourself and any collaborators, if any, with links to their GitHub profiles.",
    name: "credits",
  },
  {
    type: "checkbox",
    message: "Choose which license you'd like for your project.",
    choices: ["MIT License", "GPLv2", "Apache", "GPLv3", "BSD 3-clause"],
    name: "license", //badges,
  },
  {
    type: "input",
    message: "List any key features: ",
    name: "features",
  },
  {
    type: "input",
    message: "How can other developers contribute, if applicable?",
    name: "contribution",
  },
  {
    type: "input",
    message: "Provide any test examples and instructions on how to run them.",
    name: "tests",
  },
];

// Created a function to write README file
// look at mini project week7 for help
function writeToFile(fileName, data) {
  // fs.write () - a method on the fs module use to write a file
  // 2 parameters:
  //           file we want to write to
  //                     data we want to write to the file
  fs.writeFile(fileName, data, (err) => {
    // Checking to see if write was successful
    err ? console.log(err) : console.log("success");
  });
}

// Created a function to initialize app
function init() {
  // inquirer.prompt () - a method on the inquirer module that creates a command line prompt.
  //              questions array - parameter being passed
  //                        .then () - once the prompt has been answered, then run this code >
  inquirer.prompt(questions).then((response) => {
    // Creating a variable to store the generateMarkDown function with a parameter of response (questions array from prompt)
    const initWrite = generateMarkDown(response);
    // writeToFile - fs method which writes to a file
    //           file name   data we want to write to the file
    writeToFile("README.md", initWrite);
  });
}
// Function call to initialize app
init();
