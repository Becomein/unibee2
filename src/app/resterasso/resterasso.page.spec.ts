import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResterassoPage } from './resterasso.page';

describe('ResterassoPage', () => {
  let component: ResterassoPage;
  let fixture: ComponentFixture<ResterassoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResterassoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResterassoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
