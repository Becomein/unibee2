import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccountpublicbenePage } from './accountpublicbene.page';

describe('AccountpublicbenePage', () => {
  let component: AccountpublicbenePage;
  let fixture: ComponentFixture<AccountpublicbenePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountpublicbenePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountpublicbenePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
