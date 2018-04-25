import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableShowStatMobikeFinanceIncomeComponent } from './table-show-stat-mobike-finance-income.component';

describe('TableShowStatMobikeFinanceIncomeComponent', () => {
  let component: TableShowStatMobikeFinanceIncomeComponent;
  let fixture: ComponentFixture<TableShowStatMobikeFinanceIncomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableShowStatMobikeFinanceIncomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableShowStatMobikeFinanceIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
