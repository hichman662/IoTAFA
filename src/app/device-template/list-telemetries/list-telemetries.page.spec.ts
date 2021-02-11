import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListTelemetriesPage } from './list-telemetries.page';

describe('ListTelemetriesPage', () => {
  let component: ListTelemetriesPage;
  let fixture: ComponentFixture<ListTelemetriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTelemetriesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListTelemetriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
