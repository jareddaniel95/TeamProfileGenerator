const Employee = require('../lib/employee');
const Engineer = require('../lib/engineer');

test("Can create new Engineer", () => {
    const e = new Engineer();
    expect(typeof(e)).toBe("object");
});

test("Can set Engineer username", () => {
    const username = "testname";
    const e = new Engineer("Jared", 123, "test@email.com", username);
    expect(e.username).toBe(username);
});

test("Can get Engineer username", () => {
    const username = "testname";
    const e = new Engineer("Jared", 123, "test@email.com", username);
    expect(e.getUsername()).toBe(username);
});

test("Can get Engineer title", () => {
    const e = new Engineer();
    expect(e.getTitle()).toBe("Engineer");
});