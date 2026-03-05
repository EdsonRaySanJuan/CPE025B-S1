"use strict";

// Initialize the contacts dataset
let contacts = [
    {
        name: "Linus Torvalds",
        role: "System Admin",
        skills: ["Linux", "Git", "Kernels"],
        availability: true
    },
    {
        name: "Ada Lovelace",
        role: "Logic Analyst",
        skills: ["Algorithms", "Math", "Analytics"],
        availability: false
    },
    {
        name: "Alan Turing",
        role: "Cryptographer",
        skills: ["Logic", "Enigma", "Security"],
        availability: true
    }
];

// Function to display a specific contact's details
function showContact(index) {
    if (index >= 0 && index < contacts.length) {
        let contact = contacts[index];
        console.log(`Name: ${contact.name}`);
        console.log(`Role: ${contact.role}`);
        console.log(`First Skill: ${contact.skills[0]}`);
    } else {
        console.log("Invalid index");
    }
}

// Function to display all contacts' names
function showAllContacts() {
    console.log("\n--- All Contacts ---");
    contacts.forEach(contact => {
        console.log(contact.name);
    });
}

// Function to add a new contact
function addNewContact(name, role, skill) {
    if (!name || !role || !skill) {
        console.log("All fields are required!");
        return;
    }

    contacts.push({
        name: name,
        role: role,
        skills: [skill],
        availability: true // Default availability is true
    });

    console.log("New contact added successfully!");
}

// Function to search for a contact by name and display their role and availability
function searchContact(name) {
    let found = false;

    for (let contact of contacts) {
        if (contact.name.toLowerCase() === name.toLowerCase()) {
            console.log(`Role: ${contact.role}`);
            console.log(`Availability: ${contact.availability ? "Available" : "Busy"}`);
            found = true;
            break;
        }
    }

    if (!found) {
        console.log("Contact not found.");
    }
}

// Persistent loop for user interaction
while (true) {
    let action = prompt(
        "What would you like to do?\n" +
        "Options:\n" +
        "1 - show: Show contact by index\n" +
        "2 - all: Show all contact names\n" +
        "3 - add: Add a new contact\n" +
        "4 - search: Search a contact by name\n" +
        "Type 'quit' to exit."
    ).toLowerCase().trim();

    if (action === "quit") {
        alert("Goodbye!");
        break; // Exit the loop and end the program
    }

    switch (action) {
        case "show":
            let index = parseInt(prompt("Enter the contact index number (0, 1, 2, etc.):"));
            showContact(index);
            break;

        case "all":
            showAllContacts();
            break;

        case "add":
            let name = prompt("Enter the name:");
            let role = prompt("Enter the role:");
            let skill = prompt("Enter a skill:");
            addNewContact(name, role, skill);
            break;

        case "search":
            let searchName = prompt("Enter the name to search for:");
            searchContact(searchName);
            break;

        default:
            console.log("Invalid option! Please try again.");
    }
}