// Challenge 1 (Module 2)
function sendEmail(from, to, message) {
  console.log(`${from.email} -> ${to.email}: ${message}`);
}

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

let student1 = new User({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com', role: 'student'});
let student2 = new User({name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com', role: 'student'});
let teacher1 = new User({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com', role: 'teacher'});

student1.addCourse('maths', 2);
student1.addCourse('physics', 1);
student1.removeCourse('physics');
teacher1.addCourse('biology', 3);
teacher1.editCourse('biology', 4);

console.log(`${student1.name}: ${student1.courses.length} courses`);
console.log(`${teacher1.name}: ${teacher1.courses.length} courses`);

teacher1.sendMessage(student1, 'test message');
teacher1.sendMessage(student1, 'another message');
teacher1.showMessagesHistory();