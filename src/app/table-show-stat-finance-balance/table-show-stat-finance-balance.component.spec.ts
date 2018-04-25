import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableShowStatFinanceBalanceComponent } from './table-show-stat-finance-balance.component';

describe('TableShowStatFinanceBalanceComponent', () => {
  let component: TableShowStatFinanceBalanceComponent;
  let fixture: ComponentFixture<TableShowStatFinanceBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableShowStatFinanceBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableShowStatFinanceBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
