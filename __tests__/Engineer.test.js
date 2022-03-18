const Engineer = require("../lib/Engineer.js");

test("create an engineer object", () => {
  const engineer = new Engineer("Nathan","3", "nathan123@tester.com", "Engineer", "gitNathan");

  expect(engineer.name).toBe("Nathan");
  expect(engineer.id).toBe("3");
  expect(engineer.email).toBe("nathan123@tester.com");
  expect(engineer.role).toBe("Engineer");
  expect(engineer.github).toBe("gitNathan");
});
