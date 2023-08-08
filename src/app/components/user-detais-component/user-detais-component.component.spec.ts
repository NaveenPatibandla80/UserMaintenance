import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetaisComponentComponent } from './user-detais-component.component';

describe('UserDetaisComponentComponent', () => {
  let component: UserDetaisComponentComponent;
  let fixture: ComponentFixture<UserDetaisComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetaisComponentComponent]
    });
    fixture = TestBed.createComponent(UserDetaisComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
