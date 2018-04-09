import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { RegisterComponent } from './components/register/register.component';
import { UserGuard } from './components/user/user.guard';

const routes: Route[] = [
  { path: 'register', component: RegisterComponent },
  { loadChildren: 'app/dashboard/dashboard.module#DashboardModule', path: 'dashboard', canActivate: [UserGuard]},
  { path: '**', redirectTo: 'register'}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(
  routes,
  {
    useHash: false,
  }
);
