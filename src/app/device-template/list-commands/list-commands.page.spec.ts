import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListCommandsPage } from './list-commands.page';

describe('ListCommandsPage', () => {
  let component: ListCommandsPage;
  let fixture: ComponentFixture<ListCommandsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCommandsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListCommandsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
