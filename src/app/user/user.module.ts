import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from "./user-page.component";
import { UserGuard } from "./user.guard";
import { UserService } from "./user.service";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [UserPageComponent],
  exports: [UserPageComponent, SharedModule],
  providers: [UserGuard]
})
export class UserModule { 
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: UserModule,
			providers: [UserService]
		}
	}
}
