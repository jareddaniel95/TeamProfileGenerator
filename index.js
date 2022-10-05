const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const fs = require("fs");

let team = {
    name: "",
    manager: null,
    members: []
};

function init() {
    inquirer.prompt([
        {
            message: "Enter the name of your team: ",
            name: "teamName"
        },
        {
            message: "Enter your team manager's name: ",
            name: "managerName"
        },
        {
            message: "Enter your team manager's employee ID: ",
            name: "managerID",
        },
        {
            message: "Enter your team manager's email: ",
            name: "managerEmail",
        },
        {
            message: "Enter your team manager's office number: ",
            name: "managerOfficeNum",
        }
    ]).then(answers => {
        team.name = answers.teamName;
        team.manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNum);
        addMember();
    })
}

function addMember() {
    inquirer.prompt([
        {
            type: "list",
            message: "Add a team member or save",
            choices: ["Engineer", "Intern", "Save"],
            name: "addMember"
        }
    ]).then(answer => {
        switch (answer.addMember) {
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            case "Save":
                save();
                break;
        }
    })
}

function addEngineer() {

}

function addIntern() {
    
}

function save() {
    
}

init();