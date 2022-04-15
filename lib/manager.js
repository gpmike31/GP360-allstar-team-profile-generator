const Employee = require('./Employee');

// manager constructor to extend/call upon employee constructor 
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    }

    // // employee override to show manager
    getRole () {
        return 'Manager';
    }
}

module.exports = Manager; 