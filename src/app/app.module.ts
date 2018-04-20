import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { UserModule } from "./user/user.module";
import { UserGuard } from "./user/user.guard";
import { UserService } from "./user/user.service";
import { routing } from "./app.router";
import { RegisterComponent } from "./register/register.component";

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    UserModule.forRoot(),
    routing,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
