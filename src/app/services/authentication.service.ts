import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {BehaviorSubject, from, interval, Observable, of} from 'rxjs';
import firebase from 'firebase';
import UserInfo = firebase.UserInfo;
import User = firebase.User;
import UserCredential = firebase.auth.UserCredential;
import {take} from 'rxjs/operators';

const intervalCount = interval(100);
const takeFive = intervalCount.pipe(take(1));


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedInChanges$ = this.isLoggedIn.asObservable();


  constructor(private auth: AngularFireAuth) {  }


  changeLoginStatus(newStatus:boolean){
    this.isLoggedIn.next(newStatus);
  }

  public signup(email: string, password: string): Promise<any> {
    return  this.auth.createUserWithEmailAndPassword(email, password);
  }
  public login(email: string, password: string): Promise<any> {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  public resetPassword(email: string): Promise<any> {
    return this.auth.sendPasswordResetEmail(email);
  }
  public isAuthenticated():boolean {
    return this.auth.currentUser?true:false;
    // console.log("Auth Crasher ", user ? true : false);
    // return of(user ? true : false);
  }

  public signout(): Promise<any> {
    return this.auth.signOut()
      .then(
        ()=> this.auth.credential.subscribe(
        (cred:UserCredential) => cred = null),
      )}

  public changeEmail():Observable<User> {

    return  this.auth.user;

  }

  public changePassword():Observable<User>  {
    return this.auth.user;
  }
}
