import { Component, OnDestroy } from '@angular/core';
import { UserService } from '../../core/user.service';
import { Router } from '@angular/router';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-register',
  template: `
    <section class="container">
        <div class="card">
            <div class="card-body">
                <app-form (sendSubmit)="submit($event)" [isEdit]="false" [error]="error"></app-form>
            </div>
        </div>
    </section>
  `
})
export class RegisterComponent implements OnDestroy {
  private user$: ISubscription;
  error: any;

  constructor(private userService: UserService, private router: Router) {
    this.userNavigate();
  }

  userNavigate() {
    this.user$ = this.userService.getUser().subscribe((data: any) => {
    if (data && data.firstName)  {
      this.router.navigate(['dashboard']);
    }
    }, error => this.error = error);
  }

  ngOnDestroy() {
    this.user$.unsubscribe();
  }

  submit(event) {
    this.userService.createUser(event);
  }
}
