import {RouterModule, Routes} from '@angular/router';

import {NgModule} from '@angular/core';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';

 const routes:Routes = [

   {path:'home', component:HomeComponent},
   {path:'about', component:AboutComponent},
   {path:'', redirectTo: 'home', pathMatch:"full"},
   {path:'**',component:PageNotFoundComponent}
 ]


@NgModule({
  imports: [
    RouterModule.forRoot(
      routes, {paramsInheritanceStrategy: 'always',enableTracing:false, anchorScrolling:'enabled'}
    )],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule{}
