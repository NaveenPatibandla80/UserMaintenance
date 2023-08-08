import { 
    Injectable 
 } from '@angular/core';  
 import { HttpClient } from '@angular/common/http'; 
import { UserMainteranceConstants } from '../components/UserMaintenanceConstants';
import { Observable, Subscription } from 'rxjs';
import { UserInfoModel } from '../models/UserInfo.model';
 
 @Injectable()
 export class UserService {  

    constructor( 
        private http: HttpClient
        ) { } 
        
    getUsersList(): Observable<UserInfoModel[]>{ 
     return this.http.get<UserInfoModel []>(UserMainteranceConstants.GET_USERS_ENDPOINT);
    } 
 } 