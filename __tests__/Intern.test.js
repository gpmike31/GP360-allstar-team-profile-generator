const Intern = require("../lib/Intern.js");

test("create an Intern object", () => {
  const intern = new Intern("Brad","4", "brad123@tester.com", "University of Kansas");

  expect(intern.name).toBe("Brad");
  expect(intern.id).toBe("4");
  expect(intern.email).toBe("brad123@tester.com");
  expect(intern.school).toBe("University of Kansas");
  expect(intern.getRole()).toEqual("Intern");
});
