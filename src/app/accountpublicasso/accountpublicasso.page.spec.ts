import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccountpublicassoPage } from './accountpublicasso.page';

describe('AccountpublicassoPage', () => {
  let component: AccountpublicassoPage;
  let fixture: ComponentFixture<AccountpublicassoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountpublicassoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountpublicassoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
