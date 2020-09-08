import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccountassomodifPage } from './accountassomodif.page';

describe('AccountassomodifPage', () => {
  let component: AccountassomodifPage;
  let fixture: ComponentFixture<AccountassomodifPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountassomodifPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountassomodifPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
