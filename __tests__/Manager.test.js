/** @format */

// Importing the required classes and modules
const Manager = require("../lib/Manager");
const inquirer = require("inquirer");

// Test for setting office number via constructor argument
test("Can set office number via constructor argument", () => {
	const testValue = 100;
	const e = new Manager("Foo", 1, "test@test.com", testValue);
	expect(e.officeNumber).toBe(testValue);
});

// Test for getting role via getRole() method
test('getRole() should return "Manager"', () => {
	const testValue = "Manager";
	const e = new Manager("Foo", 1, "test@test.com", 100);
	expect(e.getRole()).toBe(testValue);
});

// Test for getting office number via getOfficeNumber() method
test("Can get office number via getOfficeNumber()", () => {
	const testValue = 100;
	const e = new Manager("Foo", 1, "test@test.com", testValue);
	expect(e.getOfficeNumber()).toBe(testValue);
});
