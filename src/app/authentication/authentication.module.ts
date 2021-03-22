import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../environments/environment';
import {PasswordEqualValidator} from './directives/password-equal-validator.directive';
import {ErrorAlertComponent} from './components/error-alert/error-alert.component';



@NgModule({
  declarations: [LoginComponent, SignupComponent, PasswordEqualValidator,ErrorAlertComponent],
  imports: [
    CommonModule,
    FormsModule,

    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
