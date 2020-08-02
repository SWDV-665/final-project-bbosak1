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

  constructor (
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public dataService: TutorServiceProvider,
    public inputDialogService: InputDialogServiceProvider,
    ) {
  }

  loadStudents() {
    return this.dataService.getStudents();
  }

  removeStudent(student, i) {
    const toast = this.toastCtrl.create({
      message: 'Removing Item - ' + student.name + " ...",
      duration: 2000
    });
    this.toastCtrl.create();
    this.dataService.removeStudent(i);
  }

  editStudent(student, index) {
    const toast = this.toastCtrl.create({
      message: 'Editing Item - ' + index + " ...",
      duration: 3000
    });
    this.toastCtrl.create();
    this.inputDialogService.showPrompt(student, index);
  }

  callStudent(student, i) {
    this.dataService.callStudent(student,i);
  }

  emailStudent(student, i) {
    this.dataService.emailStudent(student, i);
  }

  addStudent() {
    this.inputDialogService.showPrompt();
  }

}
