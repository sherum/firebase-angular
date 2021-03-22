import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {userRoutes} from './userRoutes';
import {AuthenticationGuard} from '../services/authentication.guard';


@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule],
  providers:[AuthenticationGuard]
})
export class UserRoutingModule { }
