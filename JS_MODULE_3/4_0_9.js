let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];
// added
let action = prompt("Choose an option: first, last, or new");

if (action === "first") {
    alert(`First contact:\n${contacts[0].name}\n${contacts[0].phone}\n${contacts[0].email}`);
} else if (action === "last") {
    alert(`Last contact:\n${contacts[contacts.length - 1].name}\n${contacts[contacts.length - 1].phone}\n${contacts[contacts.length - 1].email}`);
} else if (action === "new") {
    let name = prompt("Enter the name:");
    let phone = prompt("Enter the phone number:");
    let email = prompt("Enter the email:");

    if (name === "" || phone === "" || email === "") {
        alert("Missing information! Contact not added.");
    } else {
        contacts.push({ name: name, phone: phone, email: email });
        alert("New contact added!");
    }
} else {
    alert("Invalid option! Please choose 'first', 'last', or 'new'.");
}