import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class UserService {
  private subject = new Subject();
  constructor() {}

  getUser() {
    return this.subject;
  }

  createUser(data) {

    this.subject.next(data);
    return of({done: true});
  }

  updateUser(data) {
    this.subject.next(data);
    return of({done: true});
  }
}
