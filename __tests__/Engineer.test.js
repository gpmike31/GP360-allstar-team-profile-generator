const Engineer = require("../lib/Engineer.js");

test("create an engineer object", () => {
  const engineer = new Engineer("Nathan","3", "nathan123@tester.com", "gitNathan");

  expect(engineer.name).toBe("Nathan");
  expect(engineer.id).toBe("3");
  expect(engineer.email).toBe("nathan123@tester.com");
  expect(engineer.github).toBe("gitNathan");
  expect(engineer.getRole()).toEqual("Engineer");
  
});
