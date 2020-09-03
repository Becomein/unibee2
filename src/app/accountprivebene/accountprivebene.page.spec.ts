import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccountprivebenePage } from './accountprivebene.page';

describe('AccountprivebenePage', () => {
  let component: AccountprivebenePage;
  let fixture: ComponentFixture<AccountprivebenePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountprivebenePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountprivebenePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
