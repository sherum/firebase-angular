import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../../../shared/user';
import {AuthenticationService} from '../../../services/authentication.service';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';
import {EditType} from '../../../components/edit-dialog/edit-details';
import {EditDialogComponent} from '../../../components/edit-dialog/edit-dialog.component';






@Component({
  selector: 'ws-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {


  user: User;
  profileImage: any = '../../../assets/images/person_edit.png';

  @ViewChild(EditDialogComponent) editDialog: EditDialogComponent;



  constructor(private authService: AuthenticationService,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {

    this.userService.selectedUser$.subscribe(
      (selected:User)=>
        this.user = selected,
          (err: any) => console.log(err.message),
          () => console.log("User Compoenent On Init", this.user)
    );
  }

  onLogout(): void {
    this.authService.signout().then(() => {
      this.navigateToLogin();
    });
  }

  navigateToLogin() {
    this.router.navigateByUrl('/login');
  }

  onNameChange() {
    console.log("name modal");
    this.editDialog.setTitle('Do you want to edit name?')
      .setBodyTitle('name')
      .setBodyLabel('Enter new name')
      .setEditType(EditType.NAME)
      .show();
  }

  onEmailChange() {
    console.log("email modal");
    this.editDialog.setTitle('Do you want to edit email?')
      .setBodyTitle('email')
      .setBodyLabel('Enter new email')
      .setEditType(EditType.EMAIL)
      .show();
  }

  onMobileChange() {
    console.log("mobile modal");
    this.editDialog.setTitle('Do you want to edit mobile?')
      .setBodyTitle('mobile')
      .setBodyLabel('Enter new mobile')
      .setEditType(EditType.MOBILE)
      .show();
  }

  onPasswordChange() {
    console.log("password modal");
    this.editDialog.setTitle('Do you want to edit password?')
      .setBodyTitle('password')
      .setBodyLabel('Enter new password')
      .setEditType(EditType.PASSWORD)
      .show();
  }


}
