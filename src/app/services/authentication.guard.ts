import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService} from './authentication.service';
import {UserService} from './user.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(private authService: AuthenticationService,
              private userService: UserService,
              private router: Router) {}


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {


    let isLoggedIn: boolean;
    this.authService.isLoggedInChanges$.subscribe(
      (state:boolean)=> isLoggedIn = state,
      (err:any) => console.log("guard error ",err),
      ()=>console.log(isLoggedIn?"Logged in":"Logged out")
    )
    if (!isLoggedIn) {
      this.router.navigateByUrl('/login');

    }
    console.log("7. Guard says",isLoggedIn);
    return isLoggedIn;
  }

}
