import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripcarddetailsComponent } from './tripcarddetails.component';

describe('TripcarddetailsComponent', () => {
  let component: TripcarddetailsComponent;
  let fixture: ComponentFixture<TripcarddetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripcarddetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripcarddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
