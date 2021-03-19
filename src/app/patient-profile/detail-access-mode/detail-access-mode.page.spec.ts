import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailAccessModePage } from './detail-access-mode.page';

describe('DetailAccessModePage', () => {
  let component: DetailAccessModePage;
  let fixture: ComponentFixture<DetailAccessModePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAccessModePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailAccessModePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
