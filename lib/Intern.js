/** @format */

// Importing the Employee class
const Employee = require("./Employee");

// Intern class definition
class Intern extends Employee {
	constructor(name, id, email, school) {
		super(name, id, email);
		this.school = school;
	}

	getSchool() {
		return this.school;
	}

	getRole() {
		return "Intern";
	}
}

// Exporting the Intern class
module.exports = Intern;
