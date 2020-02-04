import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripDetailedViewComponent } from './trip-detailed-view.component';

describe('TripDetailedViewComponent', () => {
  let component: TripDetailedViewComponent;
  let fixture: ComponentFixture<TripDetailedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripDetailedViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripDetailedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
