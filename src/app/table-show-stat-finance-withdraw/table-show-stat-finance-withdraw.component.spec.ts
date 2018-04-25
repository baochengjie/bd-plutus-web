import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableShowStatFinanceWithdrawComponent } from './table-show-stat-finance-withdraw.component';

describe('TableShowStatFinanceWithdrawComponent', () => {
  let component: TableShowStatFinanceWithdrawComponent;
  let fixture: ComponentFixture<TableShowStatFinanceWithdrawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableShowStatFinanceWithdrawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableShowStatFinanceWithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
