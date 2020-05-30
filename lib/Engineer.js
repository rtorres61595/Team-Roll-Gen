// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {

    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github;
        
    }

    
    getGithub(){
        return this.github;
    }
    getRole() {
        return "Engineer"
    }

    
} 

function engineerReq(){
    inquirer.prompt( [
        {
        type: "input",
        name: "name",
        message: "What is your name?",
        validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          }
    
        },
        {
        type: "input",
        name: "id",
        message: "What is your ID?",
        validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          }
    
        },
        {
        type: "input",
        name: "email",
        message: "what is your email?",
        validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          }
    
        },
        {
        type: "input",
        name: "github",
        message: "What is your Github?",
        validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          }
    
        },
    
        ]).then(function(answers){
           const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
           teamMembers.push(engineer)
           console.log(teamMembers)
            createTeam()
        })
    }
    engineerReq()
module.exports = Engineer;