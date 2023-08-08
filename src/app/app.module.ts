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

@NgModule({
  declarations: [
    AppComponent,
    UserDetaisComponentComponent,
    UserListComponentComponent,
    HeaderComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [HttpClientModule, UserService],
  bootstrap: [AppComponent]
})

export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
