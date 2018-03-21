import { Injectable }     from '@angular/core';
import { CanActivate, Router }    from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { UserService } from "./user.service";

@Injectable()
export class UserGuard implements CanActivate {
  private user;
  constructor(
    private router: Router,
    private userService: UserService,
  ) {
    userService.getUser().subscribe(data => {
      this.user = data;
      console.log('GUARD: ', this.user);
    });
  }

  canActivate() {
    return this.checkUser();
  }

  private checkUser() {
      if (this.user) return true;
      else {
        this.router.navigate(['/']);
        return false;
      }
  }
}
