import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableShowStatTaxiIncomeComponent } from './table-show-stat-taxi-income.component';

describe('TableShowStatTaxiIncomeComponent', () => {
  let component: TableShowStatTaxiIncomeComponent;
  let fixture: ComponentFixture<TableShowStatTaxiIncomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableShowStatTaxiIncomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableShowStatTaxiIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
