import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddTelemetryPage } from './add-telemetry.page';

describe('AddTelemetryPage', () => {
  let component: AddTelemetryPage;
  let fixture: ComponentFixture<AddTelemetryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTelemetryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddTelemetryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
