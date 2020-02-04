import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRemoveTripComponent } from './admin-remove-trip.component';

describe('AdminRemoveTripComponent', () => {
  let component: AdminRemoveTripComponent;
  let fixture: ComponentFixture<AdminRemoveTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRemoveTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRemoveTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
