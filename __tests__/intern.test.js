const Employee = require('../lib/employee');
const Intern = require('../lib/intern');

test("Can create new Intern", () => {
    const e = new Intern();
    expect(typeof(e)).toBe("object");
});

test("Can set Intern school", () => {
    const school = "testname";
    const e = new Intern("Jared", 123, "test@email.com", school);
    expect(e.school).toBe(school);
});

test("Can get Intern school", () => {
    const school = "testname";
    const e = new Intern("Jared", 123, "test@email.com", school);
    expect(e.getSchool()).toBe(school);
});

test("Can get Intern title", () => {
    const e = new Intern();
    expect(e.getTitle()).toBe("Intern");
});