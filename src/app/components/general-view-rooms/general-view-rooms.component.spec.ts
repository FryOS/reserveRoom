import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralViewRoomsComponent } from './general-view-rooms.component';

describe('GeneralViewRoomsComponent', () => {
  let component: GeneralViewRoomsComponent;
  let fixture: ComponentFixture<GeneralViewRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralViewRoomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralViewRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
