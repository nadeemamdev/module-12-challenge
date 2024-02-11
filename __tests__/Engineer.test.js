/** @format */

// Importing the required classes and modules
const Engineer = require("../lib/Engineer");
const inquirer = require("inquirer");

// Test for setting GitHub account via constructor argument
test("Can set GitHUb account via constructor", () => {
	const testValue = "GitHubUser";
	const e = new Engineer("Foo", 1, "test@test.com", testValue);
	expect(e.github).toBe(testValue);
});

// Test for getting role via getRole() method
test('getRole() should return "Engineer"', () => {
	const testValue = "Engineer";
	const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
	expect(e.getRole()).toBe(testValue);
});

// Test for getting GitHub username via getGithub() method
test("Can get GitHub username via getGithub()", () => {
	const testValue = "GitHubUser";
	const e = new Engineer("Foo", 1, "test@test.com", testValue);
	expect(e.getGithub()).toBe(testValue);
});
