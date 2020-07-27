import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TutorServiceProvider } from '../../providers/tutor-service/tutor-service';

@Injectable()
export class InputDialogServiceProvider {

  constructor(
    public alertCtrl: AlertController,
    public dataService: TutorServiceProvider) {
  }

  async showPrompt(contact?, index?) {
    const prompt = await this.alertCtrl.create({
      header: contact ? 'Edit Contact' : 'Add Contact',
      message: contact ? "Please edit contact..." : "Please enter contact...",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
          value: contact ? contact.name : null
        },
        {
          name: 'phoneNo',
          placeholder: 'Phone Number',
          value: contact ? contact.phoneNo : null
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
          }
        },
        {
          text: 'Save',
          handler: contact => {
            // this.dataService.addContact(contact);
            if (index !== undefined) {
              this.dataService.editContact(contact, index);
            }
            else {
              this.dataService.addContact(contact);
            }
          }
        }
      ]
    });
    await prompt.present();
  }
}