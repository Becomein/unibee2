import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Loginbene2Page } from './loginbene2.page';

describe('Loginbene2Page', () => {
  let component: Loginbene2Page;
  let fixture: ComponentFixture<Loginbene2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Loginbene2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Loginbene2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
