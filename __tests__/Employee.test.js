const Employee = require("../lib/Employee");

test("create an employee object", () => {
  const employee = new Employee("Gerald","2", "gerald123@tester.com", "Employee");

  expect(employee.name).toBe("Gerald");
  expect(employee.id).toBe("2");
  expect(employee.email).toBe("gerald123@tester.com");
  expect(employee.role).toBe("Employee");
});