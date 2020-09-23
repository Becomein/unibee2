import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventcompletPage } from './eventcomplet.page';

describe('EventcompletPage', () => {
  let component: EventcompletPage;
  let fixture: ComponentFixture<EventcompletPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventcompletPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventcompletPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
