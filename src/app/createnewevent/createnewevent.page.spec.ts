import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateneweventPage } from './createnewevent.page';

describe('CreateneweventPage', () => {
  let component: CreateneweventPage;
  let fixture: ComponentFixture<CreateneweventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateneweventPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateneweventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
