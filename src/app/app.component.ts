import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './services/authentication.service';
import {LocalStorageService} from './services/local-storage.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Fiction Writer';

  loggy:boolean;

 auth: AuthenticationService;

  constructor(private authService:AuthenticationService, private localStorage:LocalStorageService, private router:Router){
    this.auth = authService;
  }

  ngOnInit() {
   //this.loggy = this.authService.isAuthenticated();
   this.authService.isLoggedInChanges$.subscribe(
     (state:boolean) => {
       this.loggy = state;
     }
   )
  }

  signOut() {
    this.auth.signout();
    this.authService.changeLoginStatus(false);
    this.router.navigateByUrl('/login');

  }

}
