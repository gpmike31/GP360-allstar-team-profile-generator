function Intern (name, id, email, role, school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
    this.school = school;
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

getSchool = function () {
    return this.school
}

module.exports = Intern;