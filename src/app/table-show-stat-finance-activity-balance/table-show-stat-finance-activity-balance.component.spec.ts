import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableShowStatFinanceActivityBalanceComponent } from './table-show-stat-finance-activity-balance.component';

describe('TableShowStatFinanceActivityBalanceComponent', () => {
  let component: TableShowStatFinanceActivityBalanceComponent;
  let fixture: ComponentFixture<TableShowStatFinanceActivityBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableShowStatFinanceActivityBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableShowStatFinanceActivityBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
