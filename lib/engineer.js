function Engineer (name, id, email, role, github) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
    this.github = github;
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

getGithub = function () {
    return this.github
};

module.exports = Engineer;