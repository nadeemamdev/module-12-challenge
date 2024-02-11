/** @format */

// Importing the required classes and modules
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// Setting up the output directory and file path
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Importing the render function from the page-template module
const render = require("./src/page-template.js");

// Creating an empty array to store team members
const teamMembers = [];

// Function to prompt for manager information
function promptManager() {
	inquirer
		.prompt([
			{
				type: "input",
				name: "name",
				message: "Enter the team manager's name:",
			},
			{
				type: "input",
				name: "id",
				message: "Enter the team manager's employee ID:",
			},
			{
				type: "input",
				name: "email",
				message: "Enter the team manager's email address:",
			},
			{
				type: "input",
				name: "officeNumber",
				message: "Enter the team manager's office number:",
			},
		])
		.then(answers => {
			// Creating a new Manager object with the provided information
			const manager = new Manager(
				answers.name,
				answers.id,
				answers.email,
				answers.officeNumber,
			);
			// Adding the manager to the teamMembers array
			teamMembers.push(manager);
			// Proceeding to the menu prompt
			promptMenu();
		});
}

// Function to prompt for engineer information
function promptEngineer() {
	inquirer
		.prompt([
			{
				type: "input",
				name: "name",
				message: "Enter the engineer's name:",
			},
			{
				type: "input",
				name: "id",
				message: "Enter the engineer's employee ID:",
			},
			{
				type: "input",
				name: "email",
				message: "Enter the engineer's email address:",
			},
			{
				type: "input",
				name: "github",
				message: "Enter the engineer's GitHub username:",
			},
		])
		.then(answers => {
			// Creating a new Engineer object with the provided information
			const engineer = new Engineer(
				answers.name,
				answers.id,
				answers.email,
				answers.github,
			);
			// Adding the engineer to the teamMembers array
			teamMembers.push(engineer);
			// Proceeding to the menu prompt
			promptMenu();
		});
}

// Function to prompt for intern information
function promptIntern() {
	inquirer
		.prompt([
			{
				type: "input",
				name: "name",
				message: "Enter the intern's name:",
			},
			{
				type: "input",
				name: "id",
				message: "Enter the intern's employee ID:",
			},
			{
				type: "input",
				name: "email",
				message: "Enter the intern's email address:",
			},
			{
				type: "input",
				name: "school",
				message: "Enter the intern's school:",
			},
		])
		.then(answers => {
			// Creating a new Intern object with the provided information
			const intern = new Intern(
				answers.name,
				answers.id,
				answers.email,
				answers.school,
			);
			// Adding the intern to the teamMembers array
			teamMembers.push(intern);
			// Proceeding to the menu prompt
			promptMenu();
		});
}

// Function to prompt for menu options
function promptMenu() {
	inquirer
		.prompt([
			{
				type: "list",
				name: "choice",
				message: "What would you like to do?",
				choices: [
					"Add an engineer",
					"Add an intern",
					"Finish building the team",
				],
			},
		])
		.then(answers => {
			switch (answers.choice) {
				case "Add an engineer":
					// Prompting for engineer information
					promptEngineer();
					break;
				case "Add an intern":
					// Prompting for intern information
					promptIntern();
					break;
				case "Finish building the team":
					// Generating the HTML file
					generateHTML();
					break;
			}
		});
}

// Function to generate the HTML file
function generateHTML() {
	// Using the render function to generate the HTML content
	const html = render(teamMembers);
	// Writing the HTML content to the output file
	fs.writeFile(outputPath, html, err => {
		if (err) throw err;
		console.log("HTML file generated successfully!");
	});
}

// Starting the application by prompting for manager information
promptManager();
