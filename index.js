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
    const htmlTop = `
    <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <link rel="stylesheet" type="text/css" href="./assets/css/style.css" />
  <title>${team.name}</title>
</head>

<body class="min-100-vh flex-column bg-light">
  <header class="p-5 text-center text-white bg-primary">
    <h1>${team.name}</h1>
  </header>
  <main id="main" class="d-flex flex-wrap justify-content-center align-center col-auto p-4 h-100">
  `;

    let htmlMid = `<div class="card p-2 m-2">
  <div class="bg-primary text-white fw-bold fs-3 p-3 text-center mb-1">${team.manager.name}</div>
  <div class="mb-2 fst-italic">${team.manager.title}</div>
  <div>
  <ul class="list-group">
  <li class="list-group-item lh-condensed">ID: ${team.manager.id}</li>
  <li class="list-group-item lh-condensed"> Email: ${team.manager.email}</li>
  <li class="list-group-item lh-condensed">Office Number: ${team.manager.officeNum}</li>
  </ul>
  </div>
  </div>`;

  for(let employee of team.members) {
    htmlMid += `<div class="card p-2 m-2">
    <div class="bg-primary text-white fw-bold fs-3 p-3 text-center mb-1">${employee.name}</div>
    <div class="mb-2 fst-italic">${employee.title}</div>
    <div>
    <ul class="list-group">
    <li class="list-group-item lh-condensed">ID: ${employee.id}</li>
    <li class="list-group-item lh-condensed"> Email: ${employee.email}</li>
    <li class="list-group-item lh-condensed">${employee.username ? `Github: <a href="https://github.com/${employee.username}">${employee.username}</a>` : `School: ${employee.school}`}</li>
    </ul>
    </div>
    </div>`;
  }

    const htmlBottom = `
</main>
</body>
</html>`;
    const html = htmlTop + htmlMid + htmlBottom;
    fs.writeFile(`./dist/${team.name.trim().split(' ').join('_')}.html`, html, function(err) {
        if(err) {
            throw err;
        }
    });
}

init();