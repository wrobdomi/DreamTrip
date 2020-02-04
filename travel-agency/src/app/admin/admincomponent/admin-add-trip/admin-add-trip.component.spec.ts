import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddTripComponent } from './admin-add-trip.component';

describe('AdminAddTripComponent', () => {
  let component: AdminAddTripComponent;
  let fixture: ComponentFixture<AdminAddTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
