import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginassoPage } from './loginasso.page';

describe('LoginassoPage', () => {
  let component: LoginassoPage;
  let fixture: ComponentFixture<LoginassoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginassoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginassoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
