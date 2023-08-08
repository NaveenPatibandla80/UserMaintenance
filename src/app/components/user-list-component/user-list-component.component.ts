import { Component, OnInit } from '@angular/core';
import { UserInfoModel } from 'src/app/models/UserInfo.model';
import { UserService } from 'src/app/services/User.service';

@Component({
  selector: 'app-user-list-component',
  templateUrl: './user-list-component.component.html',
  styleUrls: ['./user-list-component.component.scss']
})
export class UserListComponentComponent  implements OnInit {

    usersList:UserInfoModel[] = [];
  constructor(
    private userService: UserService
  ){
   }

   ngOnInit(): void {
     this.userService.getUsersList().subscribe( (users: UserInfoModel[])=>{
      this.usersList = users;

     });
   }
  
}
