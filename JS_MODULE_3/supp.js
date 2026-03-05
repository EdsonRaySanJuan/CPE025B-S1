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

// To show one contact
function showContact(index) {
  if (index >= 0 && index < contacts.length) {
    const c = contacts[index];
    alert(`${index}: ${c.name}\nPhone: ${c.phone}\nEmail: ${c.email}`);
  } else {
    alert("Error: contact index does not exist.");
  }
}

// To show all contacts
function showAllContacts() {
  if (contacts.length === 0) {
    alert("No contacts.");
    return;
  }
  let msg = "";
  for (let i = 0; i < contacts.length; i++) {
    const c = contacts[i];
    msg += `${i}: ${c.name} / ${c.phone} / ${c.email}\n`;
  }
  alert(msg);
}

// To add a contact (only if all fields filled)
function addContact() {
  const name = prompt("Enter name:");
  if (name === null || name.trim() === "") return;   // back to menu

  const phone = prompt("Enter phone:");
  if (phone === null || phone.trim() === "") return;

  const email = prompt("Enter email:");
  if (email === null || email.trim() === "") return;

  contacts.push({
    name: name.trim(),
    phone: phone.trim(),
    email: email.trim()
  });
  alert("Contact added.");
}

// To search by name
function searchContact() {
  const nameInput = prompt("Enter name to search:");
  if (nameInput === null || nameInput.trim() === "") return;

  const name = nameInput.trim().toLowerCase();
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].name.toLowerCase() === name) {
      const c = contacts[i];
      alert(`${c.name}\nPhone: ${c.phone}\nEmail: ${c.email}`);
      return;
    }
  }
  alert("Contact not found");
}

// MAIN MENU LOOP
while (true) {
  let choice = prompt(
    "Contact Manager\n\n" +
    "Options:\n" +
    "show   - show one contact by index\n" +
    "all    - show all contacts\n" +
    "add    - add a new contact\n" +
    "search - search contact by name\n" +
    "quit   - exit program"
  );

  // user cancelled, go back to menu
  if (choice === null) continue;

  choice = choice.trim().toLowerCase();

  if (choice === "quit") {
    alert("Goodbye!");
    break;
  } else if (choice === "show") {
    const indexStr = prompt("Enter contact index (0 to " + (contacts.length - 1) + "):");
    if (indexStr === null) continue;
    const index = Number(indexStr);
    if (Number.isNaN(index)) {
      alert("Invalid index.");
      continue;
    }
    showContact(index);
  } else if (choice === "all") {
    showAllContacts();
  } else if (choice === "add") {
    addContact();
  } else if (choice === "search") {
    searchContact();
  } else {
    alert("Invalid option. Please type show, all, add, search, or quit.");
  }
}
