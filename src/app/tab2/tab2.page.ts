import { Component } from '@angular/core';
import { TutorServiceProvider } from '../../providers/tutor-service/tutor-service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  appts = [];
  errorMessage: string;
  show: boolean = true;

  constructor(
    public dataService: TutorServiceProvider,
  ) {
    this.loadAppts();
  }

  onChange($event) {
    // console.log($event.format('MM-DD-YYYY'));
    console.log($event);
  }

  loadAppts() {
    this.dataService.getAppts()
      .subscribe (
        appts => this.appts = appts,
        error => this.errorMessage = <any>error
      );
  }

}
