import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './user-page.component';
import { UserGuard } from './user.guard';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [UserPageComponent],
  exports: [UserPageComponent, SharedModule],
  providers: [UserGuard]
})
export class UserModule { }
