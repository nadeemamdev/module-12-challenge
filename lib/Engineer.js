/** @format */

// Importing the Employee class
const Employee = require("./Employee");

// Engineer class definition
class Engineer extends Employee {
	constructor(name, id, email, github) {
		super(name, id, email);
		this.github = github;
	}

	getGithub() {
		return this.github;
	}

	getRole() {
		return "Engineer";
	}
}

// Exporting the Engineer class
module.exports = Engineer;
