const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email, "Manager");
        this.officeNum = officeNum;
        // this.title = "Manager";
    }
    getOfficeNum() {return this.officeNum}
}
module.exports = Manager;