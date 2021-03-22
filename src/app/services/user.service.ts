import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {User} from '../shared/user';
import {USERS_CHILD} from './database-constants';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private authedUser = new BehaviorSubject<User>(null);

  selectedUser$ = this.authedUser.asObservable();





  constructor(private fireDb: AngularFireDatabase) {
  }

  changeSelectedUser(selected:User){
    this.authedUser.next(selected);
  }

  public addUser(user: User): void {
    this.fireDb.database.ref(`${USERS_CHILD}/${user.uid}`).set({
      email:user.email,
      name:user.name,
      mobile:user.mobile,
      uid:user.uid,
      image:user.image
    });
    this.saveUser(user);
  }

  public getUser(uid: string) {
    let user = this.fireDb.database
      .ref(`${USERS_CHILD}/${uid}`);
      user.on('value',(snapshot)=>{
        const data = snapshot.val();
        this.saveUser(data);
      });
     }

  public saveUser(user:User){
    this.authedUser.next(user);
  }

  public getSavedUser():BehaviorSubject<User>{

    return this.authedUser;
  }

  public updateEmail(user:User,mobile:string):void{
    this.fireDb.object(`${USERS_CHILD}/${user.uid}`).update(({mobile:mobile}));
    this.saveUser(user);
  }

  public updateName(user:User,name:string):void{
    this.fireDb.object(`${USERS_CHILD}/${user.uid}`).update(({name:name}));
    this.saveUser(user);
  }

  public updateMobile(user: User, mobile: string): void {
    this.fireDb.object(`${USERS_CHILD}/${user.uid}`).update({mobile: mobile});
    this.saveUser(user);
  }
}
