import { Injectable } from '@angular/core';

@Injectable()
export class TutorServiceProvider {

  contacts = [
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
    console.log('Hello TutorServiceProvider Provider');
  }

  getContacts() {
    return this.contacts;
  }

  removeContact(index) {
    this.contacts.splice(index, 1);
  }

  addContact(contact) {
    this.contacts.push(contact);
  }

  editContact(contact, index) {
    this.contacts[index] = contact;
  }

}