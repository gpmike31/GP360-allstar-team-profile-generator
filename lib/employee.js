//General Employee class naming functions for name, id, email
function Employee (name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
};

//function/methods to grab data and return correct properties
getName = function() {
    return this.name
};

getID = function() {
    return this.id
};

getEmail = function () {
    return this.email
};

getRole = function () {
    return this.role
};

module.exports = Employee;
    