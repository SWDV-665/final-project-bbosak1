import { Injectable } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Injectable()
export class TutorServiceProvider {

  students = [
    {
      name: "John Doe",
      phoneNo: "555-123-4567",
      emailAddr: "john.doe@test.com",
    },
    {
      name: "Jane Doe",
      phoneNo: "555-999-0000",
      emailAddr: "jane.doe@test.com",
    },
  ];

  constructor(
    public callNumber: CallNumber,
    public emailComposer: EmailComposer,
  ) {
  }

  getStudents() {
    return this.students;
  }

  removeStudent(index) {
    this.students.splice(index, 1);
  }

  addStudent(student) {
    this.students.push(student);
  }

  editStudent(student, index) {
    this.students[index] = student;
  }

  callStudent(student, i) {
    this.callNumber.callNumber(this.students[i].phoneNo, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  emailStudent(student, i) {
    const email = {
      to: this.students[i].emailAddr,
    }
    this.emailComposer.open(email)
      .then(res => console.log('Launched email!', res))
      .catch(err => console.log('Error launching email', err));
  }

}