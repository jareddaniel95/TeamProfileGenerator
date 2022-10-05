const Employee = require('../lib/employee');

test("Can create new Employee", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("Can set Employee name", () => {
    const name = "Jared";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Can set Employee ID", () => {
    const id = "123";
    const e = new Employee("Jared", id);
    expect(e.id).toBe(id);
});

test("Can set Employee email", () => {
    const email = "test@email.com";
    const e = new Employee("Jared", 123, email);
    expect(e.email).toBe(email);
});

test("Can get Employee name", () => {
    const name = "Jared";
    const e = new Employee(name);
    expect(e.getName()).toBe(name);
});

test("Can get Employee ID", () => {
    const id = "123";
    const e = new Employee("Jared", id);
    expect(e.getID()).toBe(id);
});

test("Can get Employee email", () => {
    const email = "test@email.com";
    const e = new Employee("Jared", 123, email);
    expect(e.getEmail()).toBe(email);
});

test("Can get Employee title", () => {
    const e = new Employee();
    expect(e.getTitle()).toBe("Employee");
});