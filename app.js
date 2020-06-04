const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const teamMembers = [];
function start() {
  function createManager() {
    // prompt user for manager information
    // use answers to create manager and add to the team members array
    // when done call create team function
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is your name?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          },
        },
        {
          type: "input",
          name: "id",
          message: "What is your ID?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          },
        },
        {
          type: "input",
          name: "email",
          message: "what is your email?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          },
        },
        {
          type: "input",
          name: "officeNumber",
          message: "What is your office number?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          },
        },
      ])
      .then(function (answers) {
        const manager = new Manager(
          answers.name,
          answers.id,
          answers.email,
          answers.officeNumber
        );
        teamMembers.push(manager);
        console.log(teamMembers);
        createTeam();
      });
  }

  function createTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "teamRole",
          message: "What type of employee would you like to add?",
          choices: ["Engineer", "Intern", "done"],
        },
      ])
      .then(function (answers) {
        switch (answers.teamRole) {
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;
          default:
            buildTeam();
        }
      });
  }

  function addEngineer() {
    //use inquirer to ask questions for engineer
    // use the answers to create a engineer and add to the teamMembers array
    //when done call the create team function
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is your name?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          },
        },
        {
          type: "input",
          name: "id",
          message: "What is your ID?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          },
        },
        {
          type: "input",
          name: "email",
          message: "what is your email?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          },
        },
        {
          type: "input",
          name: "github",
          message: "What is your github user name?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          },
        },
      ])
    .then(function (answers) {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      teamMembers.push(engineer);
      console.log(teamMembers);
      createTeam();
    });
   }

  function addIntern() {
    //use inquirer to ask questions for Intern
    // use the answers to create a intern and add to the teamMembers array
    //when done call the create team function
    inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is your ID?",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        },
      },
      {
        type: "input",
        name: "email",
        message: "what is your email?",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        },
      },
      {
        type: "input",
        name: "school",
        message: "What is your github user name?",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        },
      },
    ])
  .then(function (answers) {
    const intern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.school
    );
    teamMembers.push(intern);
    console.log(teamMembers);
    createTeam();
  });
 }
  

  function buildTeam() {
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
  }

  createManager();

}
  start();


