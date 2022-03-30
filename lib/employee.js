//General Employee class naming functions for name, id, email
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }


    //function/methods to grab data and return correct properties
    getName = function() {
        return this.name;
    }

    getID = function() {
        return this.id;
    }

    getEmail = function () {
        return this.email;
    }

    getRole = function () {
        return 'Employee';
    }
};

module.exports = Employee;
    