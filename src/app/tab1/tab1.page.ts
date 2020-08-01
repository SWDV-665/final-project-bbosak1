import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController, AlertController } from '@ionic/angular';
import { TutorServiceProvider } from '../../providers/tutor-service/tutor-service';
import { InputDialogServiceProvider } from '../../providers/input-dialog-service/input-dialog-service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title = "Tutor";

  // contacts = [
  //   {
  //     name: "John Doe",
  //     phoneNo: "555-123-4567"
  //   },
  //   {
  //     name: "Jane Doe",
  //     phoneNo: "555-999-0000"
  //   },
  // ];

  constructor (
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public dataService: TutorServiceProvider,
    public inputDialogService: InputDialogServiceProvider) {
  }

  loadStudents() {
    return this.dataService.getStudents();
  }

  removeContact(contact, i) {
    const toast = this.toastCtrl.create({
      message: 'Removing Item - ' + contact.name + " ...",
      duration: 2000
    });
    this.toastCtrl.create();
    this.dataService.removeContact(i);
  }

  editContact(contact, index) {
    const toast = this.toastCtrl.create({
      message: 'Editing Item - ' + index + " ...",
      duration: 3000
    });
    this.toastCtrl.create();
    this.inputDialogService.showPrompt(contact, index);
  }

  addContact() {
    this.inputDialogService.showPrompt();
  }

}
