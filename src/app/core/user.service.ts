import { Injectable, Optional } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


export class UserServiceConfig {
  subject = new BehaviorSubject({});
}

@Injectable()
export class UserService {

  private _subject = new BehaviorSubject({});

  constructor(@Optional() config: UserServiceConfig) {
    if (config) { this._subject = config.subject; }
  }

  getUser() {
    return this._subject;
  }

  createUser(data) {
    this._subject.next(data);
    return of({done: true});
  }

  updateUser(data) {
    this._subject.next(data);
    return of({done: true});
  }
}
