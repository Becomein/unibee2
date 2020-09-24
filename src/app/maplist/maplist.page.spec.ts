import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaplistPage } from './maplist.page';

describe('MaplistPage', () => {
  let component: MaplistPage;
  let fixture: ComponentFixture<MaplistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaplistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaplistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
