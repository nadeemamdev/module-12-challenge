/** @format */

// Importing the required classes and modules
const Employee = require("../lib/Employee");
const inquirer = require("inquirer");

// Test for instantiating Employee instance
test("Can instantiate Employee instance", () => {
	const e = new Employee();
	expect(typeof e).toBe("object");
});

// Test for setting name via constructor arguments
test("Can set name via constructor arguments", () => {
	const name = "Alice";
	const e = new Employee(name);
	expect(e.name).toBe(name);
});

// Test for setting id via constructor argument
test("Can set id via constructor argument", () => {
	const testValue = 100;
	const e = new Employee("Foo", testValue);
	expect(e.id).toBe(testValue);
});

// Test for setting email via constructor argument
test("Can set email via constructor argument", () => {
	const testValue = "test@test.com";
	const e = new Employee("Foo", 1, testValue);
	expect(e.email).toBe(testValue);
});

// Test for getting name via getName() method
test("Can get name via getName()", () => {
	const testValue = "Alice";
	const e = new Employee(testValue);
	expect(e.getName()).toBe(testValue);
});

// Test for getting id via getId() method
test("Can get id via getId()", () => {
	const testValue = 100;
	const e = new Employee("Foo", testValue);
	expect(e.getId()).toBe(testValue);
});

// Test for getting email via getEmail() method
test("Can get email via getEmail()", () => {
	const testValue = "test@test.com";
	const e = new Employee("Foo", 1, testValue);
	expect(e.getEmail()).toBe(testValue);
});

// Test for getting role via getRole() method
test('getRole() should return "Employee"', () => {
	const testValue = "Employee";
	const e = new Employee("Alice", 1, "test@test.com");
	expect(e.getRole()).toBe(testValue);
});
