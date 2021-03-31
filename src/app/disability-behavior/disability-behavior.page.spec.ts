import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisabilityBehaviorPage } from './disability-behavior.page';

describe('DisabilityBehaviorPage', () => {
  let component: DisabilityBehaviorPage;
  let fixture: ComponentFixture<DisabilityBehaviorPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DisabilityBehaviorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisabilityBehaviorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
