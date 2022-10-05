class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = "Employee";
    }
    getName() {return this.name}
    getID() {return this.id}
    getEmail() {return this.email}
    getTitle() {return this.title}
}
module.exports = Employee;