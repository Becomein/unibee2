import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginbenePage } from './loginbene.page';

describe('LoginbenePage', () => {
  let component: LoginbenePage;
  let fixture: ComponentFixture<LoginbenePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginbenePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginbenePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
