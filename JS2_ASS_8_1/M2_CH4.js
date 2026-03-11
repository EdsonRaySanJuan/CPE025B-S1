// Challenge 4 (Module 2)
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

class Tutoring {
  constructor() {
    this.students = [];
    this.teachers = [];
  }

  getStudentByName(name, surname) {
    return this.students.find(student => student.name === name && student.surname === surname);
  }

  getTeacherByName(name, surname) {
    return this.teachers.find(teacher => teacher.name === name && teacher.surname === surname);
  }

  getStudentsForTeacher(teacher) {
    return this.students.filter(student => ExtendedUser.match(teacher, student).length > 0);
  }

  getTeacherForStudent(student) {
    return this.teachers.filter(teacher => ExtendedUser.match(teacher, student).length > 0);
  }

  addStudent(name, surname, email) {
    const student = new Student({name, surname, email});
    this.students.push(student);
  }

  addTeacher(name, surname, email) {
    const teacher = new Teacher({name, surname, email});
    this.teachers.push(teacher);
  }
}

let tutoring = new Tutoring();
tutoring.addStudent('Rafael', 'Fife', 'rfife@rhyta.com');
tutoring.addStudent('Kelly', 'Estes', 'k_estes@dayrep.com');
tutoring.addTeacher('Paula', 'Thompkins', 'PaulaThompkins@jourrapide.com');

let student = tutoring.getStudentByName('Rafael', 'Fife');
student.addCourse('maths', 2);
student.addCourse('physics', 4);

let teacher = tutoring.getTeacherByName('Paula', 'Thompkins');
teacher.addCourse('maths', 4);

let students = tutoring.getTeacherForStudent(student);
let teachers = tutoring.getStudentsForTeacher(teacher);

console.log(students[0]); // -> Teacher {name: 'Paula', surname: 'Thompkins', ...}
console.log(teachers[0]); // -> Student {name: 'Rafael', surname: 'Fife', ...}

student = tutoring.getStudentByName('Kelly', 'Estes');
students = tutoring.getTeacherForStudent(student);
teachers = tutoring.getStudentsForTeacher(teacher);

console.log(students[0]); // -> undefined
console.log(teachers[0]); // -> Student {name: 'Rafael', surname: 'Fife', ...}