import {Injectable} from '@angular/core';
import {of} from 'rxjs/observable/of';
import {_throw} from 'rxjs/observable/throw';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserService {
  private subject = new BehaviorSubject(null);

  constructor() {
    console.log('user service initialized');
  }

  getUser() {
    return this.subject;
  }

  createUser(data): Observable<{done: boolean}> {
    const {valid, message} = this.validateUserData(data);
    if (!valid) {
      return _throw(message);
    }

    this.subject.next(data);
    return of({done: true});
  }

  updateUser(data): Observable<{done: boolean}> {
    const {valid, message} = this.validateUserData(data);
    if (!valid) {
      return _throw(message);
    }
    this.subject.next(data);
    return of({done: true});
  }

  validateUserData(data) {
    const errors = [];
    if (!data.firstName) {
      errors.push('Firs name is mandatory');
    }
    if (!data.lastName) {
      errors.push('Firs name is mandatory');
    }
    if (typeof data.age !== 'number' || Number.isNaN(data.age) || data.age === 0) {
      errors.push('Age must be non zero number');
    }

    return {
      valid: !errors.length,
      message: errors.join()
    };
  }
}
