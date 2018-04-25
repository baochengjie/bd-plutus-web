import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableShowStatTaxiFinanceWithdrawComponent } from './table-show-stat-taxi-finance-withdraw.component';

describe('TableShowStatTaxiFinanceWithdrawComponent', () => {
  let component: TableShowStatTaxiFinanceWithdrawComponent;
  let fixture: ComponentFixture<TableShowStatTaxiFinanceWithdrawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableShowStatTaxiFinanceWithdrawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableShowStatTaxiFinanceWithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
