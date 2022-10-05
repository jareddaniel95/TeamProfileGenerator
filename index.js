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
            message: "Enter the name of your team:",
            name: "teamName"
        },
        {
            message: "Enter your team manager's name:",
            name: "managerName"
        },
        {
            message: "Enter your team manager's employee ID:",
            name: "managerID",
        },
        {
            message: "Enter your team manager's email:",
            name: "managerEmail",
        },
        {
            message: "Enter your team manager's office number:",
            name: "managerOfficeNum",
        }
    ]).then(answers => {
        team.name = answers.teamName;
        team.manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNum);
        addMember();
    });
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
    inquirer.prompt([
        {
            message: "Enter the name of the engineer:",
            name: "name"
        },
        {
            message: "Enter your the engineer's employee ID:",
            name: "id",
        },
        {
            message: "Enter the engineer's email:",
            name: "email",
        },
        {
            message: "Enter the engineer's github username:",
            name: "username",
        }
    ]).then(answers => {
        team.members.push(new Engineer(answers.name, answers.id, answers.email, answers.username));
        addMember();
    });
}

function addIntern() {
    inquirer.prompt([
        {
            message: "Enter the name of the intern:",
            name: "name"
        },
        {
            message: "Enter your the intern's employee ID:",
            name: "id",
        },
        {
            message: "Enter the intern's email:",
            name: "email",
        },
        {
            message: "Enter the intern's school name:",
            name: "school",
        }
    ]).then(answers => {
        team.members.push(new Intern(answers.name, answers.id, answers.email, answers.school));
        addMember();
    });
}

function save() {
    
}

init();