import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TelemetryDataPage } from './telemetry-data.page';

describe('TelemetryDataPage', () => {
  let component: TelemetryDataPage;
  let fixture: ComponentFixture<TelemetryDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelemetryDataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TelemetryDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
