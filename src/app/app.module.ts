import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDetaisComponentComponent } from './components/user-detais-component/user-detais-component.component';
import { UserListComponentComponent } from './components/user-list-component/user-list-component.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/User.service';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router, RouterModule } from '@angular/router';
import appRoutes from './router.config';
import { SharedPropertyService } from './services/shared-property.service';
import { AboutComponent } from './components/about/about.component';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetaisComponentComponent,
    UserListComponentComponent,
    HeaderComponentComponent,
    AboutComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)  ],
  providers: [HttpClientModule, UserService, SharedPropertyService],
  bootstrap: [AppComponent]
})

export class AppModule { 
  constructor(library: FaIconLibrary, router:Router) {
    library.addIconPacks(fas);
    router.navigate(['/home']);
  }
}
