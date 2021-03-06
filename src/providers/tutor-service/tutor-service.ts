import { Injectable } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class TutorServiceProvider {

  students: any = [];
  appts: any = [];
  blogs: any = [];
  dataChanged$: Observable<boolean>;

  private dataChangeSubject: Subject<boolean>;

  baseURL = "http://localhost:8080/";
  apptURL = "http://localhost:8081/";
  blogURL = "http://localhost:8082/";

  constructor(
    public callNumber: CallNumber,
    public emailComposer: EmailComposer,
    public http: HttpClient
  ) {
    this.dataChangeSubject = new Subject<boolean>();
    this.dataChanged$ = this.dataChangeSubject.asObservable();
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.log(errMsg);
    return Observable.throw(errMsg);
  }

  getStudents(): Observable<any> {
    return this.http.get(this.baseURL + 'api/students').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  removeStudent(student) {
    this.http.delete(this.baseURL + "api/students/" + student._id)
      .subscribe(res => {
        this.students = res;
        this.dataChangeSubject.next(true);
      });
  }

  addStudent(student) {
    this.http.post(this.baseURL + "api/students", student)
      .subscribe(res => {
        this.students = res;
        this.dataChangeSubject.next(true);
      });
  }

  // Add Appointment
  addAppt(appt) {
    this.http.post(this.apptURL + "api/appts", appt)
      .subscribe(res => {
        this.appts = res;
        this.dataChangeSubject.next(true);
      })
  }

  // Add Blog post
  addBlog(blog) {
    this.http.post(this.blogURL + "api/blogs", blog)
      .subscribe(res => {
        this.blogs = res;
        this.dataChangeSubject.next(true);
      })
  }

  editStudent(student, index) {
    this.http.put(this.baseURL + "api/students/" + student._id, student)
      .subscribe(res => {
        this.students = res;
        this.dataChangeSubject.next(true);
      });
  }

  callStudent(student, i) {
    this.callNumber.callNumber(this.students.phoneNo, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  emailStudent(student, i) {
    const email = {
      to: this.students.emailAddr,
    }
    this.emailComposer.open(email)
      .then(res => console.log('Launched email!', res))
      .catch(err => console.log('Error launching email', err));
  }

  // Appointments
  getAppts(): Observable<any> {
    return this.http.get(this.apptURL + 'api/appts').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  // Blogs
  getBlogs(): Observable<any> {
    return this.http.get(this.blogURL + 'api/blogs').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

}