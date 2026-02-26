// existing contact list
let contacts = [
  {
	name: "Maxwell Wright",
	phone: "(0191) 719 6495",
	email: "Curabitur.egestas.nunc@nonummyac.co.uk"
  },
  {
	name: "Raja Villarreal",
	phone: "0866 398 2895",
	email: "posuere.vulputate@sed.com"
  },
  {
	name: "Helen Richards",
	phone: "0800 1111",
	email: "libero@convallis.edu"
  }
];

// new contact
contacts.push({
	name: "Maisie Haley",
	phone: "0913 531 3030",
	email: "risus.Quisque@urna.ca"
});

// displaying first and last contact
let first = contacts[0];
let last = contacts[contacts.length - 1];
console.log(first.name + " / " + first.phone + " / " + first.email);
console.log(last.name + " / " + last.phone + " / " + last.email);