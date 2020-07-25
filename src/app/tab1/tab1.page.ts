import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title = "Tutor";

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

  constructor (
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController) {

  }

  removeContact(contact, i) {
    const toast = this.toastCtrl.create({
      message: 'Removing Item - ' + contact.name + " ...",
      duration: 2000
    });
    this.toastCtrl.create();
    this.contacts.splice(i, 1);
  }

  addContact() {
    this.showAddContactPrompt()
  }

  async showAddContactPrompt() {
    const prompt = await this.alertCtrl.create({
      header: 'Add Item',
      message: "Please enter item...",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'phoneNo',
          placeholder: 'Phone Number'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: contact => {
            this.contacts.push(contact);
          }
        }
      ]
    });
    await prompt.present();
  }
}
