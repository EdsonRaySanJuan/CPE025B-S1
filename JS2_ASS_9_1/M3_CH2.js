// Challenge 2 (Module 3)

class User {
  constructor(firstName, lastName, email) {
    this.setFirstName(firstName);
    this.setLastName(lastName);
    this.setEmail(email);
  }

  // Regular expression to validate first and last name
  #nameRegex = /^[A-Z][a-z]*$/;

  // Regular expression to validate email
  #emailRegex = /^[a-z]+(\.[a-z]+)*@[a-z]+\.[a-z]+(\.[a-z]+)*$/;

  // Setter for first name
  setFirstName(firstName) {
    if (this.#nameRegex.test(firstName)) {
      this.firstName = firstName;
    } else {
      throw new Error('Invalid first name format');
    }
  }

  // Getter for first name
  getFirstName() {
    return this.firstName;
  }

  // Setter for last name
  setLastName(lastName) {
    if (this.#nameRegex.test(lastName)) {
      this.lastName = lastName;
    } else {
      throw new Error('Invalid last name format');
    }
  }

  // Getter for last name
  getLastName() {
    return this.lastName;
  }

  // Setter for email
  setEmail(email) {
    if (this.#emailRegex.test(email)) {
      this.email = email;
    } else {
      throw new Error('Invalid email format');
    }
  }

  // Getter for email
  getEmail() {
    return this.email;
  }
}

try {
  let user1 = new User('Aaaa', 'Bbbb', 'Aaaa@gmail.com');
  console.log(user1);
  let user2 = new User('aaaa', 'Bbbb', 'Aaaa@gmail.com'); // -> Error
} catch (err) {
  console.log(err.message); // Catch and log error message
}