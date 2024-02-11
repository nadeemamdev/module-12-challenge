/** @format */

// Importing the Employee class
const Employee = require("./Employee");

// Manager class definition
class Manager extends Employee {
	constructor(name, id, email, officeNumber) {
		super(name, id, email);
		this.officeNumber = officeNumber;
	}

	getOfficeNumber() {
		return this.officeNumber;
	}

	getRole() {
		return "Manager";
	}
}

// Exporting the Manager class
module.exports = Manager;
