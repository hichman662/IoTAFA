import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisabilityProfilePage } from './disability-profile.page';

describe('DisabilityProfilePage', () => {
  let component: DisabilityProfilePage;
  let fixture: ComponentFixture<DisabilityProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisabilityProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisabilityProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
