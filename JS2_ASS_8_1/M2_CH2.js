// Challenge 2 (Module 2)
class User {
  constructor({name, surname, email, role}) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.role = role;
    this.courses = [];
    this.messagesHistory = [];
  }

  addCourse(course, level) {
    this.courses.push({course, level});
  }

  removeCourse(course) {
    this.courses = this.courses.filter(c => c.course !== course);
  }

  editCourse(course, level) {
    let foundCourse = this.courses.find(c => c.course === course);
    if (foundCourse) {
      foundCourse.level = level;
    } else {
      this.addCourse(course, level); 
    }
  }

  sendMessage(to, message) {
    const messageDetails = {from: this, to: to, message};
    this.messagesHistory.push(messageDetails);
    sendEmail(this, to, message);
  }

  showMessagesHistory() {
    this.messagesHistory.forEach(msg => {
      console.log(`${msg.from.email} -> ${msg.to.email}: ${msg.message}`);
    });
  }
}

class ExtendedUser extends User {
  get fullName() {
    return `${this.name} ${this.surname}`;
  }

  set fullName(name) {
    const [firstName, lastName] = name.split(' ');
    this.name = firstName;
    this.surname = lastName;
  }
}

class Teacher extends ExtendedUser {
  constructor({name, surname, email}) {
    super({name, surname, email, role: 'teacher'});
  }
}

class Student extends ExtendedUser {
  constructor({name, surname, email}) {
    super({name, surname, email, role: 'student'});
  }
}

let student1 = new Student({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com'});
let student2 = new Student({name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com'});
let teacher1 = new Teacher({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com'});

student1.addCourse('maths', 2);
teacher1.addCourse('biology', 3);
teacher1.editCourse('chemistry', 4); 

console.log(`${student1.fullName}: ${student1.courses.length} courses`);
console.log(`${teacher1.fullName}: ${teacher1.courses.length} courses`);

student1.fullName = 'Rafael Fifer';
console.log(`${student1.fullName}: ${student1.courses.length} courses`);