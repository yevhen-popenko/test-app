import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { UserModule } from './components/user/user.module';
import { routing } from './app.router';
import { RegisterComponent } from './components/register/register.component';
import {DashboardModule} from "./components/dashboard/dashboard.module";

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    UserModule,
    DashboardModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
