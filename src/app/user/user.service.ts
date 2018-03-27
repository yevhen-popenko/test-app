import { Injectable } from "@angular/core";
import { of } from 'rxjs/observable/of';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class UserService {
  private subject = new BehaviorSubject({});

  constructor() {
  }

  getUser() {
    return this.subject;
  }

  createUser(data) {

    this.subject.next(data);
    return of({done: true})
  }

  updateUser(data) {
    this.subject.next(data);
    return of({done: true})
  }
}
