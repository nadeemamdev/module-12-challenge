/** @format */

// Importing the required classes and modules
const Intern = require("../lib/Intern");
const inquirer = require("inquirer");

// Test for setting school via constructor argument
test("Can set school via constructor", () => {
	const testValue = "UCLA";
	const e = new Intern("Foo", 1, "test@test.com", testValue);
	expect(e.school).toBe(testValue);
});

// Test for getting role via getRole() method
test('getRole() should return "Intern"', () => {
	const testValue = "Intern";
	const e = new Intern("Foo", 1, "test@test.com", "UCLA");
	expect(e.getRole()).toBe(testValue);
});

// Test for getting school via getSchool() method
test("Can get school via getSchool()", () => {
	const testValue = "UCLA";
	const e = new Intern("Foo", 1, "test@test.com", testValue);
	expect(e.getSchool()).toBe(testValue);
});
