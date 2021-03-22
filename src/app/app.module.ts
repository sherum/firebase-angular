import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {AuthenticationModule} from './authentication/authentication.module';
import {UserModule} from './user/user.module';
import {StoryModule} from './story/story.module';
import {AppRoutingModule} from './AppRoutingModule';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase} from '@angular/fire/database';
import { MenubarComponent } from './components/menubar/menubar.component';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    AboutComponent,
    MenubarComponent,
    EditDialogComponent

  ],
  imports: [
    BrowserModule,

    AngularFireModule.initializeApp(environment.fireConfig),

    StoryModule,
    UserModule,
    AuthenticationModule,
    AppRoutingModule


  ],
  providers: [ AngularFireAuth,
    AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
