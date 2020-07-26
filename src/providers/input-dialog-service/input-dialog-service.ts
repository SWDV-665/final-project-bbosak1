import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TutorServiceProvider } from '../../providers/tutor-service/tutor-service';

@Injectable()
export class InputDialogServiceProvider {

  constructor(
    public alertCtrl: AlertController,
    public dataService: TutorServiceProvider) {
    console.log('Hello InputDialogServiceProvider Provider');
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
            this.dataService.addContact(contact);
          }
        }
      ]
    });
    await prompt.present();
  }
}