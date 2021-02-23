import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfilePropertyPage } from './profile-property.page';

describe('ProfilePropertyPage', () => {
  let component: ProfilePropertyPage;
  let fixture: ComponentFixture<ProfilePropertyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePropertyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfilePropertyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
