import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoModel } from 'src/app/models/UserInfo.model';
import { SharedPropertyService } from 'src/app/services/shared-property.service';

@Component({
  selector: 'app-user-detais-component',
  templateUrl: './user-detais-component.component.html',
  styleUrls: ['./user-detais-component.component.scss']
})
export class UserDetaisComponentComponent implements OnInit{

  currentUser: any = null;

  constructor(private router: Router,private sharedService: SharedPropertyService){}

  ngOnInit(): void {
    this.currentUser = this.sharedService.getCurrentUser();
  }


  navigateBack(){
    this.router.navigate(['/home']);
  }

  deleteUser(){
    if(confirm("Are you sure to delete the user?")) {
      this.sharedService.getUsers().forEach(user => {
         if(user.id === this.currentUser.id){
          user.deleted  = true;
         }
      });
      this.navigateBack();
    }
  }
}
