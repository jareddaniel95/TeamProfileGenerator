const Employee = require('../lib/employee');
const Manager = require('../lib/manager');

test("Can create new Manager", () => {
    const e = new Manager();
    expect(typeof(e)).toBe("object");
});

test("Can set Manager office number", () => {
    const num = 789;
    const e = new Manager("Jared", 123, "test@email.com", num);
    expect(e.officeNum).toBe(num);
});

test("Can get Manager office number", () => {
    const num = 789;
    const e = new Manager("Jared", 123, "test@email.com", num);
    expect(e.getOfficeNum()).toBe(num);
});

test("Can get Manager title", () => {
    const e = new Manager();
    expect(e.getTitle()).toBe("Manager");
});