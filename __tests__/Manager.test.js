const Manager = require("../lib/Manager.js");

test("create a manager object", () => {
  const manager = new Manager("Karyn","1", "Karyn123@tester.com", "Manager" ,"4");

  expect(manager.name).toBe("Karyn");
  expect(manager.id).toBe("1");
  expect(manager.email).toBe("Karyn123@tester.com");
  expect(manager.role).toBe("Manager");
  expect(manager.officeNumber).toBe("4");
});
