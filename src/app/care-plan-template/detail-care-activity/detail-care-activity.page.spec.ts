import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailCareActivityPage } from './detail-care-activity.page';

describe('DetailCareActivityPage', () => {
  let component: DetailCareActivityPage;
  let fixture: ComponentFixture<DetailCareActivityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCareActivityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailCareActivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
