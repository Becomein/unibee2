import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccountbenemodifPage } from './accountbenemodif.page';

describe('AccountbenemodifPage', () => {
  let component: AccountbenemodifPage;
  let fixture: ComponentFixture<AccountbenemodifPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountbenemodifPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountbenemodifPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
