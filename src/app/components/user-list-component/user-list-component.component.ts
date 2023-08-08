import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoModel } from 'src/app/models/UserInfo.model';
import { UserService } from 'src/app/services/User.service';
import { SharedPropertyService } from 'src/app/services/shared-property.service';

@Component({
  selector: 'app-user-list-component',
  templateUrl: './user-list-component.component.html',
  styleUrls: ['./user-list-component.component.scss']
})
export class UserListComponentComponent  implements OnInit {

  usersList:UserInfoModel[] = [];
  errorMsg :string = '';
  constructor(
    private userService: UserService,
    private router: Router,
    private sharedService: SharedPropertyService
  ){
   }

   ngOnInit(): void {
    if(!this.sharedService.getDataRetrieved()){
      this.userService.getUsersList().subscribe( (users: UserInfoModel[])=>{
        this.usersList = users;
        this.sharedService.setUsersList(this.usersList);
        this.sharedService.setDataRetrieved(true);
       }, (error)=>{
          this.errorMsg = "Error while retriving the data, please try again."
          console.log("Error");
       });
     
    }else{
      const users:UserInfoModel[] = this.sharedService.getUsers();
      this.usersList =users.filter(u =>{
        return !u.deleted;
      });
    }
    
   }
  
   showUserDetails(userInfo: UserInfoModel):void{
    //API call to get details
    //Since its a demo app and get user API gives all the details, we can navigate to details page

    this.sharedService.setCurrentUser(userInfo);
    this.router.navigate(["/userDetails"]);
   }

}
