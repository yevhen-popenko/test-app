import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { UserModule } from "./user/user.module";
import { routing } from "./app.router";
import { RegisterComponent } from "./register/register.component";
import {UserService} from './user/user.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    UserModule,
    routing,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
