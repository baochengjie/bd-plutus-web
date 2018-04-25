import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableShowStatCouponMonthComponent } from './table-show-stat-coupon-month.component';

describe('TableShowStatCouponMonthComponent', () => {
  let component: TableShowStatCouponMonthComponent;
  let fixture: ComponentFixture<TableShowStatCouponMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableShowStatCouponMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableShowStatCouponMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
