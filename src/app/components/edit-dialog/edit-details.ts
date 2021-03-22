import {UserService} from '../../services/user.service';
import {AuthenticationService} from '../../services/authentication.service';
import {User} from '../../shared/user';



export enum EditType {
  NAME,
  EMAIL,
  MOBILE,
  PASSWORD
}

export class EditDetails {

  constructor(private authService: AuthenticationService,

              private userService: UserService) {
  }

  public edit(editType: EditType, value: string) {
    switch (editType) {
      case EditType.NAME:
        this.editName(value);
        break;

      case EditType.EMAIL:
        this.editEmail(value);
        break;

      case EditType.MOBILE:
        this.editMobile(value);
        break;

      case EditType.PASSWORD:
        this.editPassword(value);
        break;
    }
  }

  private editName(name: string) {
    const user: User = this.userService.getSavedUser().getValue();
    user.name = name;
    this.userService.updateName(user, name);
    alert('Name changed successfully');
  }

  private editEmail(newEmail: string) {
    // this.authService.changeEmail().subscribe(
    //   (savedUser:FireUser) => {
    //     saveUser.email = newEmail;
    //     this.userService.updateEmail(user, newEmail);
    //     alert('Email changed successfully');
    //   },
    //   (err:any) =>alert(err.message),
    //   ()=>console.log("edit email finished")
    // );
  }

  private editMobile(mobile: string) {
    const user: User = this.userService.getSavedUser().getValue();
    user.mobile = mobile;
    this.userService.updateMobile(user, mobile);
    alert('Mobile changed successfully');
  }

  private editPassword(value: string) {
    const newPassword: string = value;
    // this.authService.changePassword().subscribe(
    //   user => {
    //     user.updatePassword(newPassword);
    //     alert('Password changed successfully');
    //   },
    //
    //   const errorMessage = error.message;
    //   alert(errorMessage);
    // });errorMessage
  }
}
