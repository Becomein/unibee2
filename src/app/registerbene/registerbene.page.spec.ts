import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterbenePage } from './registerbene.page';

describe('RegisterbenePage', () => {
  let component: RegisterbenePage;
  let fixture: ComponentFixture<RegisterbenePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterbenePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterbenePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
