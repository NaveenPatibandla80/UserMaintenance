import { Routes } from '@angular/router';
import { UserListComponentComponent } from './components/user-list-component/user-list-component.component';
import { UserDetaisComponentComponent } from './components/user-detais-component/user-detais-component.component';
import { AboutComponent } from './components/about/about.component';
import { LogoutComponent } from './components/logout/logout.component';


const appRoutes: Routes = [
    { path: 'home', 
      component: UserListComponentComponent 
    },
    {
      path: 'userDetails',
      component: UserDetaisComponentComponent
    },
    { path: 'about',
      component: AboutComponent
    }
    ,
    { path: 'logout',
      component: LogoutComponent
    }
  ];
  export default appRoutes;