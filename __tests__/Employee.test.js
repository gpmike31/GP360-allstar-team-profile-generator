//Employee function to check if employee input will return employee stats and role
const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee')

//test to expect function Employee to be truthy when given Employee inputs as an argument
//to then display employee properties
test('employee class properties', () => {
    const employee = new Employee('Gerald', '1', 'gerald360@gmail.com');

    expect(employee.name).toBe('Gerald');
});
