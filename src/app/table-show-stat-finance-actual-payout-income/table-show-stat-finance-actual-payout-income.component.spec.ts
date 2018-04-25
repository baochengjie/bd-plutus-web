import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableShowStatFinanceActualPayoutIncomeComponent } from './table-show-stat-finance-actual-payout-income.component';

describe('TableShowStatFinanceActualPayoutIncomeComponent', () => {
  let component: TableShowStatFinanceActualPayoutIncomeComponent;
  let fixture: ComponentFixture<TableShowStatFinanceActualPayoutIncomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableShowStatFinanceActualPayoutIncomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableShowStatFinanceActualPayoutIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
