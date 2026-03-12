// Challenge 5 (Module 3)

// Reuse the validated User from previous challenges
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

  toJSON() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email
    };
  }

  static fromJSON(obj) {
    return new User(obj.firstName, obj.lastName, obj.email);
  }
}

// Collection with JSON export/import and extra operations
class UsersCollection {
  constructor() {
    this.usersMap = new Map();      // email -> User
    this.domainIndex = new Map();   // domain -> Set<email>
  }

  #addToDomainIndex(user) {
    const domain = user.email.split('@')[1];
    if (!this.domainIndex.has(domain)) {
      this.domainIndex.set(domain, new Set());
    }
    this.domainIndex.get(domain).add(user.email);
  }

  #removeFromDomainIndex(user) {
    const domain = user.email.split('@')[1];
    if (this.domainIndex.has(domain)) {
      const set = this.domainIndex.get(domain);
      set.delete(user.email);
      if (set.size === 0) {
        this.domainIndex.delete(domain);
      }
    }
  }

  add(firstName, lastName, email) {
    try {
      if (this.usersMap.has(email)) {
        throw new Error('User with this email already exists');
      }
      const user = new User(firstName, lastName, email);
      this.usersMap.set(email, user);
      this.#addToDomainIndex(user);
    } catch (err) {
      console.log(err.message);
    }
  }

  delete(email) {
    if (this.usersMap.has(email)) {
      const user = this.usersMap.get(email);
      this.usersMap.delete(email);
      this.#removeFromDomainIndex(user);
    } else {
      console.log('User not found');
    }
  }

  get(email) {
    return this.usersMap.get(email) || null;
  }

  getAllSorted(field) {
    const arr = Array.from(this.usersMap.values());
    return arr.sort((a, b) => {
      if (a[field] < b[field]) return -1;
      if (a[field] > b[field]) return 1;
      return 0;
    });
  }

  getByDomain(domain) {
    const emails = this.domainIndex.get(domain);
    if (!emails) return [];
    return Array.from(emails).map(email => this.usersMap.get(email));
  }

  toJSON() {
    const usersArray = Array.from(this.usersMap.values()).map(u => u.toJSON());
    return JSON.stringify(usersArray);
  }

  fromJSON(jsonString, replace = false) {
    try {
      const arr = JSON.parse(jsonString);
      if (!Array.isArray(arr)) {
        throw new Error('Invalid JSON data for users');
      }

      if (replace) {
        this.usersMap.clear();
        this.domainIndex.clear();
      }

      for (const obj of arr) {
        this.add(obj.firstName, obj.lastName, obj.email);
      }
    } catch (err) {
      console.log(err.message);
    }
  }
}

// Demo / test

let uc = new UsersCollection();

uc.add('Aaaa', 'Bbbb', 'aaaa.bbbb@gmail.com');
uc.add('Mmmm', 'Ffff', 'mmmm.ffff@yahoo.com');
uc.add('Xxxx', 'Oooo', 'xxxx.oooo@gmail.com');
uc.add('Bad',  'Name',  'bademail');               // invalid email
uc.add('Aaaa', 'Bbbb', 'aaaa.bbbb@gmail.com');     // duplicate

console.log('All users sorted by firstName:');
console.log(uc.getAllSorted('firstName').map(u => u.getFirstName()));

console.log('Users with domain gmail.com:');
console.log(uc.getByDomain('gmail.com').map(u => u.getEmail()));

let jsonUsers = uc.toJSON();
console.log('JSON export:', jsonUsers);

let uc2 = new UsersCollection();
uc2.fromJSON(jsonUsers, true);
console.log('Restored emails:', uc2.getAllSorted('email').map(u => u.getEmail()));
