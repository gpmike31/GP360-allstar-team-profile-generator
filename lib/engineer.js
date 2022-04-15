const Employee = require('./Employee');

// engineer constructor to extend/call upon employee constructor 
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);

        this.github = github; 
    }

    getGithub () {
        return this.github;
    }

     // employee override to show engineer
    getRole () {
        return 'Engineer';
    }
}

module.exports = Engineer; 