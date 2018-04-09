import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { RegisterComponent } from '../components/register/register.component';
import { UserServiceConfig } from './user.service';



@NgModule({
  imports:      [CommonModule],
  declarations: [],
  exports:      [],
  providers:    [UserService]
})

export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(config: UserServiceConfig): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        {provide: UserServiceConfig, useValue: config }
      ]
    };
  }
}
