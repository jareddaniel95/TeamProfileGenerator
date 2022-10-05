const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, username) {
        super(name, id, email);
        this.username = username;
        this.title = "Engineer";
    }
    getUsername() {return this.username}
}
module.exports = Engineer;