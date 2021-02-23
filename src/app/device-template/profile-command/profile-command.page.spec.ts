import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileCommandPage } from './profile-command.page';

describe('ProfileCommandPage', () => {
  let component: ProfileCommandPage;
  let fixture: ComponentFixture<ProfileCommandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileCommandPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileCommandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
