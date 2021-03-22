import {AuthenticationGuard} from '../services/authentication.guard';
import {UserProfileComponent} from './components/user-profile/user-profile.component';
import {FriendProfileComponent} from './components/friend-profile/friend-profile.component';

export const userRoutes = [

  {path: 'userprofile', component: UserProfileComponent, canActivate: [AuthenticationGuard]},
  {path: 'userfriends', component: FriendProfileComponent, canActivate: [AuthenticationGuard]},
  {path: '', redirectTo: 'userprofile', pathMatch: 'full'}


];
