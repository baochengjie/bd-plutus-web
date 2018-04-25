import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableShowStatCouponDetailComponent } from './table-show-stat-coupon-detail.component';

describe('TableShowStatCouponDetailComponent', () => {
  let component: TableShowStatCouponDetailComponent;
  let fixture: ComponentFixture<TableShowStatCouponDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableShowStatCouponDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableShowStatCouponDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
