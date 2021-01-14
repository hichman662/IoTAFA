import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddDisabilityProfilePage } from './add-disability-profile.page';

describe('AddDisabilityProfilePage', () => {
  let component: AddDisabilityProfilePage;
  let fixture: ComponentFixture<AddDisabilityProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDisabilityProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddDisabilityProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
