import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccountpriveassoPage } from './accountpriveasso.page';

describe('AccountpriveassoPage', () => {
  let component: AccountpriveassoPage;
  let fixture: ComponentFixture<AccountpriveassoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountpriveassoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountpriveassoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
