//If statement for employee function, if employee is an actual employee
//then statement will be true, otherwise return false if not an employee
module.exports = function(Employee) {
    if (Employee) {
        return true;
    } else {
        return false;
    }
};