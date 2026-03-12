// Challenge 3 (Module 3)

class User {
  constructor(firstName, lastName, email) {
    this.setFirstName(firstName);
    this.setLastName(lastName);
    this.setEmail(email);
  }

  #nameRegex = /^[A-Z][a-z]*$/;
  #emailRegex = /^[a-z]+(\.[a-z]+)*@[a-z]+\.[a-z]+(\.[a-z]+)*$/;

  setFirstName(firstName) {
    if (this.#nameRegex.test(firstName)) {
      this.firstName = firstName;
    } else {
      throw new Error('Invalid first name format');
    }
  }

  getFirstName() {
    return this.firstName;
  }

  setLastName(lastName) {
    if (this.#nameRegex.test(lastName)) {
      this.lastName = lastName;
    } else {
      throw new Error('Invalid last name format');
    }
  }

  getLastName() {
    return this.lastName;
  }

  setEmail(email) {
    if (this.#emailRegex.test(email)) {
      this.email = email;
    } else {
      throw new Error('Invalid email format');
    }
  }

  getEmail() {
    return this.email;
  }
}

class Users {
  constructor() {
    this.usersMap = new Map();
  }

  add(name, surname, email) {
    try {
      const user = new User(name, surname, email);

      if (this.usersMap.has(email)) {
        throw new Error('User with this email already exists');
      }

      this.usersMap.set(email, user);
    } catch (error) {
      console.log(error.message);
    }
  }

  delete(email) {
    if (this.usersMap.has(email)) {
      this.usersMap.delete(email);
    } else {
      console.log('User not found');
    }
  }

  get(email) {
    return this.usersMap.get(email) || 'User not found';
  }

  getAll(field) {
    const usersArray = Array.from(this.usersMap.values());
    return usersArray.sort((a, b) => {
      if (a[field] < b[field]) return -1;
      if (a[field] > b[field]) return 1;
      return 0;
    });
  }
}

let users = new Users();
users.add("Aaaa", "Bbbb", "cccc@gmail.com");
users.add("Mmmm", "Ffff", "eeee@gmail.com");
users.add("Aaaa", "Bbbb", "cccc@gmail.com"); // Will display error message
users.add("Xxxx", "Oooo", "dddd@gmail.com");

console.log(users.get("dddd@gmail.com"));
console.log(users.getAll("name").map(u => u.firstName));
console.log(users.getAll("surname").map(u => u.lastName));
console.log(users.getAll("email").map(u => u.email));