import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TutorServiceProvider } from '../../providers/tutor-service/tutor-service';

@Injectable()
export class InputDialogServiceProvider {

  constructor(
    public alertCtrl: AlertController,
    public dataService: TutorServiceProvider) {
  }

  async showPrompt(student?, index?) {
    const prompt = await this.alertCtrl.create({
      header: student ? 'Edit Student' : 'Add Student',
      message: student ? "Please edit student..." : "Please enter student...",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
          value: student ? student.name : null
        },
        {
          name: 'phoneNo',
          placeholder: 'Phone Number',
          value: student ? student.phoneNo : null
        },
        {
          name: 'emailAddr',
          placeholder: 'Email Address',
          value: student ? student.emailAddr : null
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
          handler: data => {
            if (index !== undefined) {
              student.name = data.name;
              student.phoneNo = data.phoneNo;
              student.emailAddr = data.emailAddr;
              this.dataService.editStudent(student, index);
            }
            else {
              this.dataService.addStudent(student);
            }
          }
        }
      ]
    });
    await prompt.present();
  }
}