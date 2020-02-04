import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsFilterCriteriaComponent } from './trips-filter-criteria.component';

describe('TripsFilterCriteriaComponent', () => {
  let component: TripsFilterCriteriaComponent;
  let fixture: ComponentFixture<TripsFilterCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripsFilterCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripsFilterCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
