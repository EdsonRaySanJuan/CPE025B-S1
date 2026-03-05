"use strict";

let contacts = [
    { name: "Maxwell Wright", phone: "5566778899", email: "contact1@mail.com" },
    { name: "Raja Villarreal", phone: "4012345678", email: "contact2@mail.com" },
    { name: "Helen Richards", phone: "2233445566", email: "contact3@mail.com" }
];

// Function to show all contacts
function showAllContacts(list) {
    if (!(list instanceof Array)) {
        console.log("Invalid contact list");
        return;
    }

    console.log("\n--- CONTACT LIST ---");

    for (let i = 0; i < list.length; i++) {
        console.log(
            list[i].name + " / " +
            list[i].phone + " / " +
            list[i].email
        );
    }

    console.log("--------------------\n");
}

// Function to add a new contact
function addNewContact(list, name, phone, email) {
    if (!(list instanceof Array)) {
        console.log("Invalid contact list");
        return;
    }

    if (!name || !phone || !email) {
        console.log("All fields required");
        return;
    }

    list.push({ name, phone, email });
    console.log("Contact added");
}

// Function to sort contacts by a specified field
function sortContacts(list, field) {
    if (!(list instanceof Array)) {
        console.log("Invalid contact list");
        return;
    }

    list.sort((a, b) => {
        if (a[field] < b[field]) return -1;
        if (a[field] > b[field]) return 1;
        return 0;
    });

    console.log(`Contacts sorted by ${field}`);
}

// Main menu loop
let option;
do {
    option = prompt(
        "1 - show all\n" +
        "2 - add new\n" +
        "3 - sort by name\n" +
        "4 - sort by phone\n" +
        "5 - sort by email\n" +
        "Enter a choice (or cancel to exit):"
    );

    // Check if the user canceled the prompt
    if (option === null) {
        console.log("Program exited.");
        break; // Exit the loop if user cancels
    }

    switch (option) {
        case "1":
            showAllContacts(contacts);
            break;

        case "2":
            let n = prompt("Name:");
            let p = prompt("Phone:");
            let e = prompt("Email:");
            addNewContact(contacts, n, p, e);
            break;

        case "3":
            sortContacts(contacts, "name");
            showAllContacts(contacts);
            break;

        case "4":
            sortContacts(contacts, "phone");
            showAllContacts(contacts);
            break;

        case "5":
            sortContacts(contacts, "email");
            showAllContacts(contacts);
            break;

        default:
            console.log("Wrong option");
    }
} while (option !== null); // Keep running until the user cancels or exits