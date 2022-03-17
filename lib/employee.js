//General Employee class naming functions for name, id, email
function Employee (name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
}

//function/methods to grab data and return correct properties
getname = function() {
    return this.name
};

module.exports = Employee;
    