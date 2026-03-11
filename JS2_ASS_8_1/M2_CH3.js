// Challenge 3 (Module 2)
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
  constructor({name, surname, email, role}) {
    super({name, surname, email, role});
  }

  get fullName() {
    return `${this.name} ${this.surname}`;
  }

  set fullName(name) {
    const [firstName, lastName] = name.split(' ');
    this.name = firstName;
    this.surname = lastName;
  }

  static match(teacher, student, courseName) {
    const matches = student.courses.filter(studentCourse => {
      return teacher.courses.some(teacherCourse => {
        return teacherCourse.course === studentCourse.course &&
          teacherCourse.level >= studentCourse.level;
      });
    });

    if (courseName) {
      return matches.find(match => match.course === courseName);
    }

    return matches;
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
student1.addCourse('physics', 4);
teacher1.addCourse('maths', 4);

let match = ExtendedUser.match(teacher1, student1);
console.log(match); // -> [{course: 'maths', level: 2}]

teacher1.editCourse('maths', 1);
match = ExtendedUser.match(teacher1, student1);
console.log(match); // -> []

teacher1.addCourse('physics', 4);
match = ExtendedUser.match(teacher1, student1, 'physics');
console.log(match); // -> {course: 'physics', level: 4}