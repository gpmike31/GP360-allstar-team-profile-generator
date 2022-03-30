const Employee = require('./Employee');

// intern constructor to extend/call upon employee constructor
class Intern extends Employee  {
    constructor (name, id, email, school) {
        super (name, id, email); 

        this.school = school; 
    }

    getSchool () {
        return this.school;
    }

    // employee override to show intern
    getRole () {
        return "Intern";
    }
}

module.exports = Intern; 