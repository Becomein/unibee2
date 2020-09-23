import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NeweventgaratPage } from './neweventgarat.page';

describe('NeweventgaratPage', () => {
  let component: NeweventgaratPage;
  let fixture: ComponentFixture<NeweventgaratPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeweventgaratPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NeweventgaratPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
