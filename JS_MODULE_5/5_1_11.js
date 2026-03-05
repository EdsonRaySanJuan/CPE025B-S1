"use strict";

let contacts = [
    {
        name: "Maxwell Wright",
        phone: "5566778899",
        email: "contact1@mail.com"
    },
    {
        name: "Raja Villarreal",
        phone: "4012345678",
        email: "contact2@mail.com"
    },
    {
        name: "Helen Richards",
        phone: "2233445566",
        email: "contact3@mail.com"
    }
];

// Function to check if the contacts list is valid (is an array)
function isInstanceArray(list) {
    return list instanceof Array;
}

// Function to show a specific contact
function showContact(list, index) {
    if (!isInstanceArray(list)) {
        console.log("Invalid contact list");
        return;
    }

    if (index >= 0 && index < list.length) {
        let c = list[index];
        console.log("\n----------------------------");
        console.log("Contact Information");
        console.log("----------------------------");
        console.log("Name  : " + c.name);
        console.log("Phone : " + c.phone);
        console.log("Email : " + c.email);
        console.log("----------------------------\n");
    } else {
        console.log("Invalid index");
    }
}

// Function to show all contacts
function showAllContacts(list) {
    if (!isInstanceArray(list)) {
        console.log("Invalid contact list");
        return;
    }

    console.log("\n========= CONTACT LIST =========");

    for (let i = 0; i < list.length; i++) {
        console.log("\nContact #" + (i + 1));
        console.log("----------------------------");
        console.log("Name  : " + list[i].name);
        console.log("Phone : " + list[i].phone);
        console.log("Email : " + list[i].email);
    }

    console.log("\n===============================\n");
}

// Function to add a new contact
function addNewContact(list, name, phone, email) {
    if (!isInstanceArray(list)) {
        console.log("Invalid contact list");
        return;
    }

    if (!name || !phone || !email) {
        console.log("All fields are required");
        return;
    }

    list.push({
        name: name,
        phone: phone,
        email: email
    });

    console.log("Contact added successfully");
}

// Main loop for interacting with the program
while (true) {
    let option = prompt(
        "1 - show first\n" +
        "2 - show last\n" +
        "3 - add new\n" +
        "4 - show all"
    );

    switch (option) {
        case "1":
            showContact(contacts, 0);
            break;

        case "2":
            showContact(contacts, contacts.length - 1);
            break;

        case "3":
            let n = prompt("Enter name:");
            let p = prompt("Enter phone:");
            let e = prompt("Enter email:");
            addNewContact(contacts, n, p, e);
            break;

        case "4":
            showAllContacts(contacts);
            break;

        default:
            console.log("Wrong option, try again.");
    }
}