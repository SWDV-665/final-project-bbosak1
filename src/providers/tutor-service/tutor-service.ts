import { Injectable } from '@angular/core';

@Injectable()
export class TutorServiceProvider {

  students = [
    {
      name: "John Doe",
      phoneNo: "555-123-4567"
    },
    {
      name: "Jane Doe",
      phoneNo: "555-999-0000"
    },
  ];

  constructor() {
  }

  getStudents() {
    return this.students;
  }

  removeContact(index) {
    this.students.splice(index, 1);
  }

  addContact(contact) {
    this.students.push(contact);
  }

  editContact(contact, index) {
    this.students[index] = contact;
  }

}