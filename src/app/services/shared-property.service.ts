import { Injectable } from "@angular/core";
import { UserInfoModel } from "../models/UserInfo.model";

@Injectable()
export class SharedPropertyService{

    private currentUser: any;

    private usersList:any[] = [];

    private isDataRetrieved:boolean = false;

    
    setCurrentUser(userInfo: UserInfoModel){
        this.currentUser = userInfo;
    }

    getCurrentUser():UserInfoModel{
        return this.currentUser;
    }

    clearCurrentUser(){
        this.currentUser = null;
    }

    setUsersList(usersList: UserInfoModel[]){
        this.usersList = usersList;
    }

    getUsers():UserInfoModel[]{
        return this.usersList;
    }

    clearusers(){
        this.usersList = [];
    }
    

    getDataRetrieved(){
        return this.isDataRetrieved;
    }

    setDataRetrieved(isDataRetrieved:boolean){
         this.isDataRetrieved = isDataRetrieved;
    }


}