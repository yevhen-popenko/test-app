import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Route, RouterModule } from '@angular/router';
import { UserModule } from '../user/user.module';

const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
  imports: [
    CommonModule,
    routing,
    UserModule,
  ],
  declarations: [DashboardComponent],
  exports: []
})
export class DashboardModule { }
