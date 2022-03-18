function Manager (name, id, email, role, officeNumber) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
    this.officeNumber = officeNumber
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

getofficeNumber = function () {
    return this.officeNumber
};

module.exports = Manager;