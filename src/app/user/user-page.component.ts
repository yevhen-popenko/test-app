import {Component, OnInit, ViewChild} from '@angular/core';
import { UserService } from './user.service';
import { Observable } from 'rxjs/Observable';
import {FormBuilder} from '@angular/forms';
import {FormComponent} from '../shared/form.component';

@Component({
  selector: 'app-user-page',
  template: `
    <div *ngIf="editMode; else viewMode">
        <app-form (sendSubmit)="submit($event)" [error]="error" [data]="user"></app-form>
    </div>
    <ng-template #viewMode>
      <h2 class="h2">User data</h2>
      <div>firstName: {{user.firstName}}</div>
      <div>lastName: {{user.lastName}}</div>
      <div>age: {{user.age}}</div>
      <button (click)="setEditMode()" class="btn btn-secondary">Edit</button>
    </ng-template>
  `
})
export class UserPageComponent implements OnInit {
  editMode = false;
  user;
  error = null;
  user$: Observable<any>;
  @ViewChild('form') form: FormComponent;

  constructor(
    private userService: UserService,
  ) {
    this.user$ = this.userService.getUser();
  }

  ngOnInit() {
    this.user$.subscribe(data => {
      this.user = data;
    });
  }

  setEditMode() {
    this.editMode = true;
  }
  submit(event) {
    this.userService.updateUser(event).subscribe(data => {
      this.editMode = false;
    }, error => this.error = error);
  }
}
