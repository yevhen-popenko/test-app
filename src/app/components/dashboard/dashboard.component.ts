import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <section class="container">
        <div class="row">
        <div class="col-sm-6">
            <div class="card">
                <div class="card-body">User</div>
                <app-user-page></app-user-page>
            </div>
        </div>
        </div>
    </section>
  `
})
export class DashboardComponent {}
